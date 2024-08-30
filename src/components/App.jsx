import { useState, useEffect } from "react";
import "./App.css";
import TitleForm from "./TitleForm";
import MetaForm from "./MetaForm";
import Editor from "./Editor";
import LoginDialog from "./LoginDialog";

const getPostMeta = () => {
  return {
    slug: "",
    path: "knowledge/better-programmer",
    author: "",
    tags: "",
    itinerary: "",
  };
};

// TODO: SHA should be refreshed frecuently because is the SHA of the last commit

const getRootSha = async credentials => {
  const serverUrl = `https://api.github.com/repos/${credentials.githubUser}/${credentials.githubRepo}/branches/main`;

  const data = await fetch(serverUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${credentials.githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((response) => response.json());

  console.log('SHA', data);
 
  credentials.repoRootSha = data.commit.sha;

  return credentials;
}

function App() {
  let savedCredentials = JSON.parse(localStorage.getItem('blog_editor_c'));
  
  if( !savedCredentials || !savedCredentials.ts || savedCredentials.ts < Date.now() ) {
    savedCredentials = null;
    localStorage.removeItem('blog_editor_c');
  }
  else {
    savedCredentials.ts = Date.now() + 3600*1000;
    localStorage.setItem('blog_editor_c', JSON.stringify(savedCredentials));
  }

  const [credentials, setCredentials] = useState(savedCredentials);
  const [postData, setPostData] = useState(getPostMeta());
  const [originalContent, setOriginalContent] = useState("");
  const [content, setContent] = useState("Markdown content");

  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchRepoContents = async () => {
      const serverUrl = `https://api.github.com/repos/${credentials.githubUser}/${credentials.githubRepo}/git/trees/${credentials.repoRootSha}?ref=main&recursive=true`;

      const data = await fetch(
        serverUrl,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${credentials.githubToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      ).then((response) => response.json());

      setCategories(data.tree.filter((d) => d.type === "tree").map(d => ({name: d.path, sha: d.sha, mode: d.mode})));
      setPosts(data.tree.filter((d) => !d.path.startsWith('README') && !d.path.endsWith('/README.md') && (d.type==='blob' && d.path.endsWith('md')) ).map(d => ({name: d.path, sha: d.sha, type: d.type, mode: d.mode})));
    };

    if( credentials && credentials.repoRootSha && !credentials.errors ) {
      fetchRepoContents();
    }
  }, [credentials]);



  const handleSave = async (ev) => {
    ev.preventDefault();

    // Fetch PUT with data
    console.log({ credentials, postData, content });

    const selectedCategory = postData.path;

    const markdown = `
author:"${postData.author}"
tags:"${postData.tags}"
itinerary:"${postData.itinerary}"

---

${content}
`;

    const serverUrl = `https://api.github.com/repos/${credentials.githubUser}/${credentials.githubRepo}/contents/${selectedCategory}/${postData.slug}.md`;

    const data = await fetch(serverUrl, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${credentials.githubToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Testing to fetch content",
        committer: {
          name: "I. vanGamo",
          email: "vangamo.beta@gmail.com",
        },
        content: btoa(markdown),
      }),
    }).then((response) => response.json());

    console.log(data);
  };

  const handleChangePostData = (metaProp, metaValue) => {
    setPostData({
      ...postData,
      [metaProp]: metaValue,
    });
  };

  const handleClickNew = () => {
    // Show dialog
  };

  const handleClickUndo = () => {
    setPostData(getPostMeta());
  };

  const handleChangeContent = (content) => {
    setContent(content);
  };

  const handleSubmitLogin = async (credentials) => {

    let {repoUrl, commitName, commitEmail, token, remember} = credentials;

    if (!repoUrl.includes("github.com")) {
      if (repoUrl.startsWith("/")) {
        repoUrl = "github.com";
      } else {
        console.error(`ERROR: Repo url not valid (${repoUrl})`);
        return;
      }
    }

    if (repoUrl.startsWith("//")) {
      repoUrl = repoUrl.replace("//", "https://");
    }

    if (!repoUrl.startsWith("http")) {
      repoUrl = "https://" + repoUrl;
    }

    if (repoUrl.startsWith("http://")) {
      repoUrl = repoUrl.replace("http://", "https://");
    }

    const [protocol, _, domain, user, repo] = repoUrl.split("/");

    credentials = {
      githubUser: user,
      githubRepo: repo,
      githubToken: token,
      commitName,
      commitEmail
    };

    setCredentials(credentials);

    if( remember ) {
      localStorage.setItem('blog_editor_c', JSON.stringify({
        ...credentials,
        ts: Date.now() + 3600*1000
      }));
    }

    credentials = await getRootSha(credentials);
    setCredentials( credentials );

    if( remember ) {
      localStorage.setItem('blog_editor_c', JSON.stringify({
        ...credentials,
        ts: Date.now() + 3600*1000
      }));
    }
  };

  const handleCancelLogin = () => {
    setCredentials(false);
  };

  return (
    <>
      {!credentials && (
        <LoginDialog
          isShown={credentials !== false}
          onSubmit={handleSubmitLogin}
          onCancel={handleCancelLogin}
        />
      )}
      <div className="central content w-full min-w-96 max-w-screen-2xl my-5 mx-auto px-3">
        {/* form.formtitle */}
        <TitleForm
          slug={postData.slug}
          onChange={handleChangePostData}
          onClickSave={handleSave}
          onClicknUndo={handleClickUndo}
          onClickNew={handleClickNew}
        />

        {/* form.settings */}
        <MetaForm metadata={postData} onChange={handleChangePostData} />

        {/* .editor */}
        <Editor content={content} onChange={handleChangeContent} />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import TitleForm from "./TitleForm";
import MetaForm from "./MetaForm";
import Editor from "./Editor";
import ModalDialog from "./ModalDialog";

const getPostMeta = () => {
  return {
    slug: "",
    path: "",
    author: "",
    tags: "",
    itinerary: "",
  };
};

function App() {
  const [credentials, setCredentials] = useState(null);
  const [postData, setPostData] = useState(getPostMeta());
  const [originalContent, setOriginalContent] = useState("");
  const [content, setContent] = useState("Markdown content");

  const handleSave = (ev) => {
    ev.preventDefault();

    // Fetch PUT with data
    console.log({ credentials, postData, content });
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

  const handleSubmitLogin = (urlRepo, token) => {
    if (!urlRepo.includes("github.com")) {
      if (urlRepo.startsWith("/")) {
        urlRepo = "github.com";
      } else {
        console.error(`ERROR: Repo url not valid (${urlRepo})`);
        return;
      }
    }

    if (urlRepo.startsWith("//")) {
      urlRepo = urlRepo.replace("//", "https://");
    }

    if (!urlRepo.startsWith("http")) {
      urlRepo = "https://" + urlRepo;
    }

    if (urlRepo.startsWith("http://")) {
      urlRepo = urlRepo.replace("http://", "https://");
    }

    const [protocol, _, domain, user, repo] = urlRepo.split('/');

    setCredentials({
      user: user,
      repo: repo,
      token: token,
    });
  };

  const handleCancelLogin = () => {
    setCredentials(false);
  };

  return (
    <>
      {!credentials && (
        <ModalDialog
          isShown={credentials !== false}
          title="Login"
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

import { useState } from "react";
import "./App.css";
import TitleForm from "./TitleForm";
import MetaForm from "./MetaForm";
import Editor from "./Editor";

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
  const [postData, setPostData] = useState( getPostMeta() );
  const [originalContent, setOriginalContent] = useState("");
  const [content, setContent] = useState("Markdown content");

  const handleSave = (ev) => {
    ev.preventDefault();

    // Fetch PUT with data
    console.log({postData, content});
    
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
    setPostData( getPostMeta() );
  };

  const handleChangeContent = (content) => {
    setContent(content);
  }

  return (
    <div className="central content w-full min-w-96 max-w-5xl mt-5 mx-auto px-3">
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
  );
}

export default App;

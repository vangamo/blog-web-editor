import {
  MDXEditor,
  headingsPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

function Editor({content, onChange}) {
  const handleChange = (content) => {
    console.log(content);

    onChange(content);
  };

  return (
    <MDXEditor
      className="editor tablet:-translate-y-20"
      /* ref={ref} */
      markdown={content}
      onChange={handleChange}
      plugins={[headingsPlugin(), markdownShortcutPlugin()]}
    />
  );
}

export default Editor;

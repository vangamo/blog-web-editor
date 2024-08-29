import {
  MDXEditor,
  headingsPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

function Editor() {
  const handleChange = (...params) => {
    console.log(params);
  };

  return (
    <MDXEditor
      className="editor tablet:-translate-y-20"
      /* ref={ref} */
      markdown="Markdown content"
      onChange={handleChange}
      plugins={[headingsPlugin(), markdownShortcutPlugin()]}
    />
  );
}

export default Editor;

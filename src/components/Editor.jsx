import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  linkPlugin,
  UndoRedo,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  StrikeThroughSupSubToggles,
  CodeToggle,
  InsertCodeBlock,
  CreateLink,
  toolbarPlugin,
  markdownShortcutPlugin,
  linkDialogPlugin,
  ListsToggle,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import "./Editor.css";

function Editor({ content, onChange }) {
  const handleChange = (content) => {
    console.log(content);

    onChange(content);
  };

  return (
    <MDXEditor
      className="editor"
      /* ref={ref} */
      markdown={content}
      onChange={handleChange}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              {" "}
              <UndoRedo />
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <StrikeThroughSupSubToggles />
              <ListsToggle />
              <CodeToggle />
              <InsertCodeBlock />
              <CreateLink />
            </>
          ),
        }),
        headingsPlugin(),
        quotePlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        linkPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            jsx: "React",
            css: "CSS",
            bash: "BASH command",
          },
        }),
        linkDialogPlugin(),
      ]}
    />
  );
}

export default Editor;

import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  toolbarPlugin,
  codeBlockPlugin,
  CreateLink,
  CodeToggle,
  InsertThematicBreak,
  InsertTable,
  ListsToggle,
  UndoRedo,
  BoldItalicUnderlineToggles,
} from "@mdxeditor/editor";
import { useMarkdownEditor } from "../Hooks/useMarkdownEditor";

export const MarkdownEditor = () => {
  const { selectedNote, editorref, handleAutosaving, handleBlur } =
    useMarkdownEditor();
  if (!selectedNote) return null;

  return (
    <>
      <MDXEditor
        ref={editorref}
        onChange={handleAutosaving}
        onBlur={handleBlur}
        key={selectedNote.title}
        markdown={selectedNote.content}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          codeBlockPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <div className="fixed  flex flex-col items-center gap-4 px-4 w-10 right-4  bg-zinc-800 border border-zinc-600 rounded-md">
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <ListsToggle />
                  <InsertTable />
                  <CodeToggle />
                  <CreateLink />
                  <InsertThematicBreak />
                </div>
              </>
            ),
          }),
        ]}
        contentEditableClassName="outline-none  max-w-none text-lg px-8 sm:py-5  caret-yellow-500 
       prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0
        prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      />
    </>
  );
};

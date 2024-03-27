import { NotePreview } from ".";
import { useNotesList } from "../Hooks/useNotesList";
import { NoteInfo } from "../Models";
import { ComponentProps, useState } from "react";
import NoteTitle from "./NoteTitle";
import { Content, MarkdownEditor } from ".";

export const NotePreviewList = ({ ...props }: ComponentProps<"ul">) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList();
  const [editor, setEditor] = useState<boolean>(false);

  if (!notes) return null;
  if (notes.length == 0) {
    return <h3 className="text-center pt-4">No Notes yet🫡 !</h3>;
  }
  return (
    <>
      <ul {...props}>
        {notes.map((note: NoteInfo, index: number) => (
          <NotePreview
            key={note.title}
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index, setEditor)}
            {...note}
          />
        ))}
      </ul>
      {editor ? (
        <Content className="absolute w-full h-screen  top-0 left-0 z-10 sm:hidden bg-zinc-900  ">
          <NoteTitle setEditor={setEditor} className="pt-2" />
          <MarkdownEditor />
        </Content>
      ) : (
        ""
      )}
    </>
  );
};

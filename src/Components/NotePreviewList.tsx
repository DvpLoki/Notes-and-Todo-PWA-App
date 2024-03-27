import { NotePreview } from ".";
import { useNotesList } from "../Hooks/useNotesList";
import { NoteInfo } from "../Models";
import { ComponentProps } from "react";

export const NotePreviewList = ({ ...props }: ComponentProps<"ul">) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({});

  if (!notes) return null;
  if (notes.length == 0) {
    return <h3 className="text-center pt-4">No Notes yet🫡 !</h3>;
  }
  return (
    <ul {...props}>
      {notes.map((note: NoteInfo, index: number) => (
        <NotePreview
          key={note.title}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  );
};

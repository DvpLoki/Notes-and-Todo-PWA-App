import { useAtomValue, useSetAtom } from "jotai";
import { saveNoteAtom, selectedNoteAtom } from "../Store";
import { useRef } from "react";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { throttle } from "lodash";

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom);
  const saveNote = useSetAtom(saveNoteAtom);
  const editorref = useRef<MDXEditorMethods>(null);

  const handleAutosaving = throttle(
    async (content: string) => {
      if (!selectedNote) return null;
      await saveNote(content);
    },
    3000,
    { leading: false, trailing: true }
  );

  const handleBlur = async () => {
    if (!selectedNote) return null;
    handleAutosaving.cancel();
    const content = editorref.current?.getMarkdown();
    if (content != null) {
      await saveNote(content);
    }
  };

  return { selectedNote, editorref, handleAutosaving, handleBlur };
};

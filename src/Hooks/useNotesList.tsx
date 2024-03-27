import { useAtom, useAtomValue } from "jotai";
import { notesAtom, selectedNoteIndexAtom } from "../Store";
import { Dispatch } from "react";
import { SetStateAction } from "jotai/vanilla";

export const useNotesList = () => {
  const notes = useAtomValue(notesAtom);
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(
    selectedNoteIndexAtom
  );

  const handleNoteSelect =
    (index: number, setEditor: Dispatch<SetStateAction<boolean>>) =>
    async () => {
      setSelectedNoteIndex(index);
      setEditor(true);
    };
  return { notes, selectedNoteIndex, handleNoteSelect };
};

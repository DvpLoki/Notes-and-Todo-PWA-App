import { NoteInfo } from "../Models";
import {
  addNoteToStore,
  deleteNoteInStore,
  getAllNotesFromStore,
  updateNoteInStore,
} from "./db";
import { atom } from "jotai";
import { unwrap } from "jotai/utils";

const loadnotes = async () => {
  const notes = await getAllNotesFromStore();
  return notes.sort((a, b) => b.lastupdated - a.lastupdated);
};

export const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(
  loadnotes()
);

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev);

export const selectedNoteIndexAtom = atom<number | null>(null);

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom);
  const selectedNoteIndex = get(selectedNoteIndexAtom);
  if (selectedNoteIndex == null || !notes) return null;
  const selectedNote = notes[selectedNoteIndex];
  return {
    ...selectedNote,
  };
});

export const createNoteAtom = atom(null, async (get, set, title: string) => {
  const notes = get(notesAtom);
  if (!notes) return null;
  const newNote: NoteInfo = {
    title: title,
    lastupdated: Date.now(),
    content: "# hello",
  };
  await addNoteToStore(newNote);
  set(notesAtom, [
    newNote,
    ...notes.filter((note) => note.title !== newNote.title),
  ]);

  set(selectedNoteIndexAtom, 0);
});

export const deleteNoteAtom = atom(null, async (get, set) => {
  const notes = get(notesAtom);
  const selectedNote = get(selectedNoteAtom);
  if (!selectedNote || !notes) return null;
  await deleteNoteInStore(selectedNote.title);
  set(
    notesAtom,
    notes.filter((note) => note.title !== selectedNote.title)
  );
  set(selectedNoteIndexAtom, null);
});

export const saveNoteAtom = atom(null, async (get, set, content: string) => {
  const notes = get(notesAtom);
  const selectedNote = get(selectedNoteAtom);
  if (!selectedNote || !notes) return null;
  await updateNoteInStore(selectedNote.title, content);
  set(
    notesAtom,
    notes.map((note) => {
      if (note.title === selectedNote.title) {
        return {
          ...note,
          content: content,
          lastupdated: Date.now(),
        };
      }
      return note;
    })
  );
});

import { openDB } from "idb";
import { NoteInfo } from "../Models";

const db = openDB("noteme", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("notes")) {
      db.createObjectStore("notes", {
        keyPath: "title",
        autoIncrement: false,
      });
    }
  },
});

export const addNoteToStore = async (note: NoteInfo) => {
  (await db).add("notes", {
    title: note.title,
    lastupdated: note.lastupdated,
    content: note.content,
  });
};

export const getAllNotesFromStore = async () => {
  return (await db).getAll("notes");
};

// export const getNoteFromStore = async (title: string) => {
//   const note = (await db).get("notes", title);
//   return note;
// };

export const updateNoteInStore = async (title: string, content: string) => {
  const db = await openDB("noteme", 1);
  await db.put("notes", {
    title: title,
    content: content,
    lastupdated: Date.now(),
  });
};

export const deleteNoteInStore = async (title: string) => {
  const db = await openDB("noteme", 1);
  await db.delete("notes", title);
};

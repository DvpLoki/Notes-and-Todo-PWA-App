import { createNoteAtom } from "../../Store";
import { useSetAtom } from "jotai";
import { Modal } from ".";
import { useState } from "react";

export const NewNotemodal = ({ closeModal }: any) => {
  const createNote = useSetAtom(createNoteAtom);
  const [title, settitle] = useState<string>("");

  const handleCreateNote = () => {
    closeModal(false);
    createNote(title);
  };

  const handleChange = (e: any) => {
    settitle(e.target.value);
  };
  return (
    <Modal>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-zinc-400"> Create new Note</h3>
        <label className="text-lg">Save As:</label>
        <input
          type="text"
          className="h-8 rounded-sm bg-zinc-600 text-zinc-100 w-full "
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row justify-end gap-4 mt-2">
        <button
          className="bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-md"
          onClick={handleCreateNote}>
          Create
        </button>
        <button
          className="bg-zinc-600 px-2 py-1 rounded-md hover:bg-zinc-500 "
          onClick={() => closeModal(false)}>
          cancel
        </button>
      </div>
    </Modal>
  );
};

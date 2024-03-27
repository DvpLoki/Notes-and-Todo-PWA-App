import { deleteNoteAtom } from "../../Store";
import { useAtomValue, useSetAtom } from "jotai";
import { selectedNoteAtom } from "../../Store";
import { Modal } from ".";

export const DeleteNotemodal = ({ closeModal }: any) => {
  const selectedNote = useAtomValue(selectedNoteAtom);
  const deletenote = useSetAtom(deleteNoteAtom);
  const handledelete = () => {
    closeModal(false);
    deletenote();
  };
  return (
    <Modal>
      <h3 className="text-lg text-zinc-400">
        <span className="text-xl">Delete Note</span>
        <br />
        Are you sure,you want to delete "
        <span className="text-zinc-200">{selectedNote?.title}</span>" ?
      </h3>

      <div className="flex flex-row justify-end gap-4 mt-2">
        <button
          className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded-md"
          onClick={handledelete}>
          Delete
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

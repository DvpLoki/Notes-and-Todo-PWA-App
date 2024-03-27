import { ActionButton, ActionButtonProps } from ".";
import { FaRegTrashCan } from "react-icons/fa6";
import { DeleteNotemodal } from "../Modals";

import { useState } from "react";

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const [modal, setmodal] = useState<boolean>(false);
  return (
    <>
      <ActionButton onClick={() => setmodal((prev) => !prev)} {...props}>
        <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
      </ActionButton>
      {modal ? <DeleteNotemodal closeModal={setmodal} /> : null}
    </>
  );
};

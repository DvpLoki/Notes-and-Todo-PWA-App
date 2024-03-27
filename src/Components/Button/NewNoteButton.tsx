import { ActionButton, ActionButtonProps } from ".";
import { FiPlus } from "react-icons/fi";

import { useState } from "react";
import { NewNotemodal } from "../Modals";

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const [modal, setmodal] = useState<boolean>(false);

  return (
    <>
      <ActionButton onClick={() => setmodal((prev) => !prev)} {...props}>
        <FiPlus className="w-4 h-4  text-zinc-300" />
      </ActionButton>
      {modal ? <NewNotemodal closeModal={setmodal} /> : null}
    </>
  );
};

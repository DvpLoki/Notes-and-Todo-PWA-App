import { ActionButton, ActionButtonProps } from ".";
import { LuFileSignature } from "react-icons/lu";

import { useState } from "react";
import { NewNotemodal } from "../Modals";

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const [modal, setmodal] = useState<boolean>(false);

  return (
    <>
      <ActionButton onClick={() => setmodal((prev) => !prev)} {...props}>
        <LuFileSignature className="w-4 h-4 text-zinc-300" />
      </ActionButton>
      {modal ? <NewNotemodal closeModal={setmodal} /> : null}
    </>
  );
};

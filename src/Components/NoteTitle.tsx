import { useAtomValue } from "jotai";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { selectedNoteAtom } from "../Store";
import { FiArrowLeft, FiMoreVertical } from "react-icons/fi";
import { DownloadNote } from ".";

const NoteTitle = ({
  className,
  setEditor,
  ...props
}: {
  setEditor: Dispatch<SetStateAction<boolean>>;
  className: string;
}) => {
  const selectedNote = useAtomValue(selectedNoteAtom);
  const [options, setOptions] = useState<boolean>(false);
  if (!selectedNote) return null;

  return (
    <div
      className={twMerge(
        " relative flex flex-row px-5 py-4 justify-between",
        className
      )}
      {...props}>
      <FiArrowLeft
        className="sm:hidden  cursor-pointer text-2xl hover:opacity-50  transition-all hover:-translate-x-1"
        onClick={() => setEditor(false)}
      />
      <span className="hidden sm:block"></span>
      <span className="text-gray-400">{selectedNote.title}</span>
      <FiMoreVertical
        className="text-2xl cursor-pointer  hover:opacity-50"
        onClick={() => setOptions(true)}
      />
      {options ? <DownloadNote setOptions={setOptions} /> : ""}
    </div>
  );
};

export default NoteTitle;

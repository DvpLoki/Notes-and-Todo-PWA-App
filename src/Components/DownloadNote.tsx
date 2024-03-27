import { useAtomValue } from "jotai";
import { Dispatch, SetStateAction } from "react";
import { selectedNoteAtom } from "../Store";
import { FiX } from "react-icons/fi";

export const DownloadNote = ({
  setOptions,
}: {
  setOptions: Dispatch<SetStateAction<boolean>>;
}) => {
  const note = useAtomValue(selectedNoteAtom);
  if (note === null) return null;
  const data = new Blob([note.content], { type: "text/plain" });
  const downloadLink = window.URL.createObjectURL(data);

  return (
    <div className="absolute right-10 top-5 z-10 bg-zinc-800 border px-5 py-3 border-zinc-700 rounded-md">
      <FiX
        className="w-5 h-5 -ml-3 text-zinc-500 hover:text-zinc-300 "
        onClick={() => setOptions(false)}
      />

      <h3 className=" mt-2 text-zinc-300/50  ">Download as </h3>

      <ul className=" mt-2 space-y-1">
        <li className="hover:bg-zinc-700 rounded-md px-2 py-1">
          <a
            download={`${note.title}.txt`}
            href={downloadLink}
            onClick={() => setOptions(false)}>
            Text
          </a>
        </li>
        <li className="hover:bg-zinc-700 rounded-md px-2 py-1">
          <a
            download={`${note.title}.md`}
            href={downloadLink}
            onClick={() => setOptions(false)}>
            Markdown
          </a>
        </li>
      </ul>
    </div>
  );
};

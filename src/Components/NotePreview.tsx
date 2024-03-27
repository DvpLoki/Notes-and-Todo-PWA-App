import { NoteInfo } from "../Models";
import { FormatDate, cn } from "../utils";
import { ComponentProps } from "react";

export type NotePreviewprops = NoteInfo & {
  isActive?: boolean;
} & ComponentProps<"div">;

export const NotePreview = ({
  title,
  lastupdated,
  className,
  isActive = false,
  ...props
}: NotePreviewprops) => {
  const date = FormatDate(lastupdated);
  return (
    <div
      className={cn(
        "cursor-pointer sm:p-3 px-5 py-3 rounded-md bg-zinc-500/25 my-2 transition-colors duration-75",
        { "bg-zinc-400/75": isActive, "hover:bg-zinc-500/75": !isActive },
        className
      )}
      {...props}>
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {date}
      </span>
    </div>
  );
};

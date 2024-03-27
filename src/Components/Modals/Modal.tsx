import { ComponentProps } from "react";

export const Modal = ({ children }: ComponentProps<"div">) => {
  return (
    <div className="absolute  z-50 justify-center  flex items-center w-full h-[calc(100%-1rem)] max-h-full">
      <div className="relative pb-4  bg-zinc-800 md:w-full w-[80%] max-w-lg max-h-full rounded-lg border border-zinc-700 ">
        <div className=" flex flex-col space-y-3">
          <h2 className=" p-2 text-zinc-100 bg-zinc-600 text-xl rounded-t-md">
            Noteme
          </h2>
          <div className="px-10 py-4  gap-4 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

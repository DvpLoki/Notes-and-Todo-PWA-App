import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args));
};

const dateformatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "IST",
});

export const FormatDate = (ms: number) => dateformatter.format(ms);

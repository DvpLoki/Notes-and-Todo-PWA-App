import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<"aside">) => {
  return (
    <aside
      className={twMerge(
        "w-[300px]  h-[100vh + 10px] overflow-auto",
        className
      )}
      {...props}>
      {children}
    </aside>
  );
};

export const Content = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={twMerge("flex-1 overflow-auto", className)} {...props}>
      {children}
    </div>
  );
};

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<"main">) => {
  return (
    <main className={twMerge("flex flex-row h-screen", className)} {...props}>
      {children}
    </main>
  );
};

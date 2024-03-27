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
        "sm:w-[250px] md:w-[300px] w-full h-screen overflow-auto",
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
    <div className={twMerge("sm:flex-1 overflow-auto", className)} {...props}>
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
    <main
      className={twMerge("sm:flex sm:flex-row  sm:h-screen", className)}
      {...props}>
      {children}
    </main>
  );
};

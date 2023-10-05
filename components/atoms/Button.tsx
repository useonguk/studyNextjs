import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}
export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        "bg-primary text-white py-2.5 px-4 rounded flex gap-2.5"
      )}
    >
      {children}
    </button>
  );
}

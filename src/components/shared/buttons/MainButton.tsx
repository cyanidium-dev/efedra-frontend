import { forwardRef, ReactNode } from "react";
import LoaderIcon from "../icons/LoaderIcon";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MainButtonProps {
  children: string | ReactNode;
  variant?: "beige" | "blue";
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  loadingText?: string;
}

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      children,
      variant = "blue",
      className = "",
      type = "button",
      disabled = false,
      isLoading = false,
      onClick,
      loadingText,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={twMerge(
          clsx(
            `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center h-[50px] px-5 rounded-full text-white ${
              variant === "beige" ? "bg-beige" : "bg-blue"
            } 
          disabled:opacity-60 enabled:xl:hover:brightness-125 enabled:focus-visible:brightness-125 enabled:active:scale-[98%] will-change-transform transition duration-300 ease-in-out`,
            "w-full",
            "text-[18px] font-medium leading-[120%]",
            className
          )
        )}
      >
        <span className="relative z-10">
          {isLoading ? loadingText : children}
        </span>
        {isLoading ? <LoaderIcon /> : null}
      </button>
    );
  }
);

MainButton.displayName = "MainButton";

export default MainButton;

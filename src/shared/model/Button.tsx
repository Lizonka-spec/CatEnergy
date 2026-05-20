import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export const Button = ({ children, className, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={clsx(
                "bg-[#68B738] text-white font-oswald uppercase text-sm h-10 p-4 flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg",
                className,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

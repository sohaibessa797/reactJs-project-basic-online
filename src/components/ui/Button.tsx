import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children, ...rest }: IProps) => {
  return (
    <button
      className={`${className} transition-colors duration-300 py-2 rounded-md flex-1 text-white cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

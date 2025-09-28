import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className? : string;
}

const Input = ({className = "" , ...rest}: IProps) => {
  return (
    <input
      className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-m ${className}`}
      {...rest}
    />
  );
};

export default Input;

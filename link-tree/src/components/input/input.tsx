import type { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props:InputProps) => {
  return (
    <input
      className=" mb-4 h-9 rounded-md px-2 border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
     {...props}
    />
  );
};

export default Input;

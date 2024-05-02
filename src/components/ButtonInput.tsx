import React from "react";

interface PropsButtonInput {
  children: React.ReactNode;
  handleClick: () => void;
}

const ButtonInput: React.FC<PropsButtonInput> = ({ children, handleClick }) => (
  <button
    onClick={handleClick}
    className="mt-10 w-full rounded-md py-2 bg-Light dark:bg-Dark text-Dark dark:text-Light text-md font-semibold hover:bg-[#BCA37F] hover:border hover:border-Light hover:text-Light hover:dark:bg-[#FFF5E0] hover:dark:border-Dark hover:dark:text-Dark"
  >
    {children}
  </button>
);

export default ButtonInput;

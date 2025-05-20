import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-black  text-sm md:text-base hover:bg-black/70  text-white px-4 py-1 rounded-2xl">
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-black  text-white px-4 py-1 rounded-2xl">
      {children}
    </button>
  );
};

export default Button;

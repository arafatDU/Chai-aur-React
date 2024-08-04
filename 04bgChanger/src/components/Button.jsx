import React from "react";

const Button = ({color, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default Button;

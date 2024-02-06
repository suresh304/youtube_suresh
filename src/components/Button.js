import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex flex-wrap">
      <button className="px-2 m-2 rounded-lg bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;

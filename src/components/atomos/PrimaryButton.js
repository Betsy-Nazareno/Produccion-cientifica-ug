import React from "react";

const PrimaryButton = ({ text, handleClick, className }) => {
  return (
    <button
      className={`bg-[#1E6292] text-white py-2 px-6 rounded-xl ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

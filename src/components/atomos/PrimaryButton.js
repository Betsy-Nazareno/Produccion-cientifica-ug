import React from "react";

const PrimaryButton = ({ text, handleClick }) => {
  return (
    <button
      className="bg-[#1E6292] text-white py-2 px-6 rounded-xl"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

import React from "react";

const Input = ({ text, setText, label, placeholder, type }) => {
  return (
    <div>
      <p className="pb-2 font-semibold">{label}</p>
      <input
        value={text || ""}
        onChange={(input) => setText(input.target.value)}
        className="border-[1px] border-[#e6e6e6] py-1 w-full px-2"
        placeholder={placeholder}
        type={type || ""}
      />
    </div>
  );
};

export default Input;

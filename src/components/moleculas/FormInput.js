import React from "react";

export const FormInput = ({ value, setValue, label, className = "" }) => {
  return (
    <div className={`my-6 ${className}`}>
      <p className="text-sm font-semibold pb-2">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-white w-full rounded-lg p-2 text-gray-500"
      />
    </div>
  );
};

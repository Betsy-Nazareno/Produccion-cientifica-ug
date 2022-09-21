import React from "react";

export const FormSelectInput = ({
  values,
  handleChange,
  label,
  name,
  className = "",
}) => {
  return (
    <div className={`my-6 ${className}`}>
      <p className="text-sm font-semibold pb-2">{label}</p>
      <select
        name={name}
        id={name}
        className="w-full py-2"
        onChange={(e) => handleChange(e.target.value)}
      >
        {values.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

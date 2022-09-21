import React from "react";

const HeaderTable = ({ text }) => {
  return (
    <th className="text-left font-semibold py-4 px-2 border-2 border-solid border-[#f4f4f4] min-w-[200px]">
      {text}
    </th>
  );
};

export default HeaderTable;

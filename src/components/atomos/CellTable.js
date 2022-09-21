import React from "react";

const CellTable = ({ children }) => {
  return (
    <td className="border-2 border-solid border-[#f4f4f4] py-2 pl-3">
      {children}
    </td>
  );
};

export default CellTable;

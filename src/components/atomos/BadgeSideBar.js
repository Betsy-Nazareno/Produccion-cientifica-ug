import React, { useEffect, useState } from "react";

const BadgeSideBar = ({ text, value, source, handleClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const sesion = JSON.parse(window.localStorage.getItem("sesion"));
    if (sesion.page === value) {
      setIsSelected(true);
    }
  }, []);

  return (
    <div
      className={`${
        (isHover || isSelected) && "bg-[#F8FDFF] font-bold"
      } rounded-lg cursor-pointer py-4 px-2 mr-2 flex`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleClick(value)}
    >
      <img src={source} width={20} />
      <p className="pl-4">{text}</p>
    </div>
  );
};

export default BadgeSideBar;

import React from "react";
import PrimaryButton from "../atomos/PrimaryButton";

const TitleWithButton = ({ title }) => {
  return (
    <div className="flex justify-between px-12">
      <p className="text-2xl font-bold ">{title}</p>
      <PrimaryButton text={"+ Agregar"} />
    </div>
  );
};

export default TitleWithButton;

import React from "react";
import TitleWithButton from "../../moleculas/TitleWithButton";
import TablaLibros from "./TablaLibros";

const LibrosTemplate = () => {
  return (
    <div className="pt-12 px-4">
      <TitleWithButton title="Libros" />
      <div className="overflow-x-scroll w-11/12 mt-12">
        <TablaLibros />
      </div>
    </div>
  );
};

export default LibrosTemplate;

import React from "react";
import { useModal } from "../../../hooks/useModal";
import TitleWithButton from "../../moleculas/TitleWithButton";
import { ModalLibrosForm } from "../../organismos/modals/ModalLibrosForm";
import TablaLibros from "./TablaLibros";

const LibrosTemplate = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div className="pt-12 px-4">
      <ModalLibrosForm
        isOpen={isOpen}
        onClose={closeModal}
        title="Agregar libro"
      />
      <TitleWithButton title="Libros" handleClick={openModal} />
      <div className="overflow-x-scroll ml-8 mr-20 mt-12">
        <TablaLibros />
      </div>
    </div>
  );
};

export default LibrosTemplate;

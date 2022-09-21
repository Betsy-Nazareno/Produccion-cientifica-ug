import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import TitleWithButton from "../../moleculas/TitleWithButton";
import { ModalPonenciasForm } from "../../organismos/modals/ModalPonenciasForm";
import TablaPonencias from "./TablaPonencias";

const PonenciasTemplate = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [hasChange, setHasChange] = useState(false);

  return (
    <div className="pt-12 px-4">
      <ModalPonenciasForm
        isOpen={isOpen}
        onClose={closeModal}
        onChange={() => setHasChange(!hasChange)}
        title="Agregar Ponencia"
      />
      <TitleWithButton title="Ponencias" handleClick={openModal} />
      <div className="overflow-x-scroll ml-8 mr-20 mt-12">
        <TablaPonencias hasChange={hasChange} />
      </div>
    </div>
  );
};

export default PonenciasTemplate;

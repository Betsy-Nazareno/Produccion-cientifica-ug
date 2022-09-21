import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import TitleWithButton from "../../moleculas/TitleWithButton";
import { ModalArticulosForm } from "../../organismos/modals/ModalArticulosForm";
import TablaArticulos from "./TablaArticulos";

const ArticulosTemplate = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [hasChange, setHasChange] = useState(false);

  return (
    <div className="pt-12 px-4">
      <ModalArticulosForm
        isOpen={isOpen}
        onClose={closeModal}
        onChange={() => setHasChange(!hasChange)}
        title="Agregar Artículos"
      />
      <TitleWithButton title="Artículos" handleClick={openModal} />
      <div className="overflow-x-scroll ml-8 mr-20 mt-12">
        <TablaArticulos hasChange={hasChange} />
      </div>
    </div>
  );
};

export default ArticulosTemplate;

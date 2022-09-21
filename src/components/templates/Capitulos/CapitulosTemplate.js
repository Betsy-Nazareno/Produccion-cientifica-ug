import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import TitleWithButton from "../../moleculas/TitleWithButton";
import { ModaCapitulosForm } from "../../organismos/modals/ModalCapitulosForm";
import TablaCapitulos from "./TablaCapitulos";

const CapitulosTemplate = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [hasChange, setHasChange] = useState(false);

  return (
    <div className="pt-12 px-4">
      <ModaCapitulosForm
        isOpen={isOpen}
        onClose={closeModal}
        onChange={() => setHasChange(!hasChange)}
        title="Agregar Capítulo"
      />
      <TitleWithButton title="Capítulos" handleClick={openModal} />
      <div className="overflow-x-scroll ml-8 mr-20 mt-12">
        <TablaCapitulos hasChange={hasChange} />
      </div>
    </div>
  );
};

export default CapitulosTemplate;

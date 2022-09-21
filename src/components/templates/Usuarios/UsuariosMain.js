import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import TitleWithButton from "../../moleculas/TitleWithButton";
import { ModalUsuario } from "../../organismos/modals/ModalUsuario";
import TablaUsuarios from "./TablaUsuarios";

const UsuariosTemplate = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [hasChange, setHasChange] = useState(false);

  return (
    <div className="pt-12 px-4">
      <ModalUsuario
        isOpen={isOpen}
        onClose={closeModal}
        onChange={() => setHasChange(!hasChange)}
        title="Invitar Usuario"
      />
      <TitleWithButton
        title="Usuarios"
        btnLabel="Invitar usuario"
        handleClick={openModal}
      />
      <div className="overflow-x-scroll ml-8 mr-20 mt-12">
        <TablaUsuarios hasChange={hasChange} />
      </div>
    </div>
  );
};

export default UsuariosTemplate;

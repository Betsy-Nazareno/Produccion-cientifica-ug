import React, { useState } from "react";
import { roleUsers } from "../../../lib/constants";
import { addUser } from "../../../lib/services/users.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { FormInput } from "../../moleculas/FormInput";
import { FormSelectInput } from "../../moleculas/FormSelectInput";
import Modal from "../../moleculas/Modal";

const initialValues = {
  nombre: "",
  identificacion: "",
  email: "",
  password: "",
  role: "",
};
export const ModalUsuario = ({ isOpen, onClose, title, onChange }) => {
  const [usuario, setUsuario] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    await addUser(usuario);
    setUsuario(initialValues);
    setIsLoading(false);
    onClose();
    onChange();
  };

  const handleChange = (key, value) => {
    setUsuario({ ...usuario, [key]: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      center
      className="px-6 pb-8 max-h-[80vh] min-w-[60vw] overflow-y-scroll"
    >
      <FormInput
        value={usuario.nombre}
        setValue={(value) => handleChange("nombre", value)}
        label="Nombre"
      />

      <FormInput
        value={usuario.identificacion}
        setValue={(value) => handleChange("identificacion", value)}
        label="Identificación"
      />

      <FormInput
        value={usuario.email}
        setValue={(value) => handleChange("email", value)}
        label="Email"
      />

      <FormInput
        value={usuario.password}
        setValue={(value) => handleChange("password", value)}
        label="Password"
      />

      <FormSelectInput
        values={roleUsers}
        label="Rol"
        handleChange={(value) => handleChange("role", value)}
      />

      <div className="w-full flex justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton
            text="Agregar"
            handleClick={handleSave}
            className="w-10/12 mt-8"
          />
        )}
      </div>
    </Modal>
  );
};

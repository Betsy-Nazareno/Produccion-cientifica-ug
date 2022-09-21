import React, { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { roleUsers } from "../../../lib/constants";
import { getAllusers, updateRole } from "../../../lib/services/users.services";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";
import Spinner from "../../atomos/Spinner";
import { FormSelectInput } from "../../moleculas/FormSelectInput";
import { ModalConfirmation } from "../../organismos/modals/ModalConfirmation";

const TablaUsuarios = ({ hasChange }) => {
  const [usuarios, setusuarios] = useState([]);
  const [isOpen, openModal, closeModal] = useModal();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setusuarios(await getAllusers());
    })();
  }, [hasChange]);

  const updateUserRole = async (id, role) => {
    setIsLoading(true);
    const user = usuarios.find((user) => user.id === id);
    const filtered = usuarios.filter((user) => user.id !== id);
    setusuarios([...filtered, { ...user, role }]);
    await updateRole(id, role);
    openModal();
    setIsLoading(false);
  };

  return (
    <>
      <ModalConfirmation
        isOpen={isOpen}
        onClose={closeModal}
        title="Actualización Exitosa"
      />
      <table>
        <thead>
          <tr>
            <HeaderTable text="Nombre" />
            <HeaderTable text="Identificación" />
            <HeaderTable text="Email" />
            <HeaderTable text="Rol" />
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <CellTable>{usuario.nombre}</CellTable>
              <CellTable>{usuario.identificacion} </CellTable>
              <CellTable>{usuario.email} </CellTable>
              <CellTable>
                <FormSelectInput
                  values={roleUsers}
                  className="my-2"
                  value={usuario.role}
                  handleChange={(role) => updateUserRole(usuario.id, role)}
                />
              </CellTable>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default TablaUsuarios;

import React, { useEffect, useState } from "react";
import { getAllusers } from "../../../lib/services/users.services";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";

const TablaUsuarios = ({ hasChange }) => {
  const [usuarios, setusuarios] = useState([]);

  useEffect(() => {
    (async () => {
      setusuarios(await getAllusers());
    })();
  }, [hasChange]);

  return (
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
            <CellTable>{usuario.role} </CellTable>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaUsuarios;

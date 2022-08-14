import React from "react";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";

const TablaLibros = () => {
  return (
    <table className="border-2 border-solid border-[#f4f4f4]">
      <tr>
        <HeaderTable text="Título" />
        <HeaderTable text="Código ISBN" />
        <HeaderTable text="Fecha publicación" />
        <HeaderTable text="Dominio Científico" />
        <HeaderTable text="Línea de investigación" />
        <HeaderTable text="Sublínea de investigación" />
        <HeaderTable text="Páginas" />
        <HeaderTable text="Autores" />
        <HeaderTable text="Editor / Compilador" />
        <HeaderTable text="Campo detallado" />
        <HeaderTable text="Filación UG" />
        <HeaderTable text="Revisión por pares" />
        <HeaderTable text="Título de proyecto FCI" />
        <HeaderTable text="Validado CIGC" />
        <HeaderTable text="Observación CIGC" />
      </tr>
      <tr>
        <CellTable text="text" />
        <CellTable text="text" />
        <CellTable text="text" />
        <CellTable text="text" />
        <CellTable text="text" />
        <CellTable text="text" />
      </tr>
    </table>
  );
};

export default TablaLibros;

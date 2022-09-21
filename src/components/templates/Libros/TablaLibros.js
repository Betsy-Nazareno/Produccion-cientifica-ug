import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../../lib/services/libros.services";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";
import { DetailDocente } from "../../moleculas/DetailDocente";

const TablaLibros = ({ hasChange }) => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    (async () => {
      setLibros(await getAllBooks());
    })();
  }, [hasChange]);

  return (
    <table>
      <thead>
        <tr>
          <HeaderTable text="Facultad" />
          <HeaderTable text="Código UG" />
          <HeaderTable text="Título" />
          <HeaderTable text="Código ISBN" />
          <HeaderTable text="Editor / Compilador" />
          <HeaderTable text="Páginas" />
          <HeaderTable text="Fecha publicación" />
          <HeaderTable text="Link publicación" />
          <HeaderTable text="Campo detallado" />
          <HeaderTable text="Filación UG" />
          <HeaderTable text="Revisión por pares" />
          <HeaderTable text="Dominio Científico" />
          <HeaderTable text="Línea de investigación" />
          <HeaderTable text="Docentes" />
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, index) => (
          <tr key={index}>
            <CellTable>{libro.facultad}</CellTable>
            <CellTable>{libro.codigo_ug} </CellTable>
            <CellTable>{libro.titulo} </CellTable>
            <CellTable>{libro.codigo_isbn}</CellTable>
            <CellTable> {libro.editor_compilador} </CellTable>
            <CellTable>{libro.paginas} </CellTable>
            <CellTable> {libro.fecha_publicacion}</CellTable>
            <CellTable>{libro.link_publicacion} </CellTable>
            <CellTable>{libro.campo_detallado} </CellTable>
            <CellTable> {libro.filacion_ug}</CellTable>
            <CellTable>{libro.revision_por_pares}</CellTable>
            <CellTable>{libro.dominio_cientifico}</CellTable>
            <CellTable>{libro.linea_investigacion} </CellTable>
            <CellTable>
              {libro.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </CellTable>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaLibros;

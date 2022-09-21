import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../../lib/services/articulos.services";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";
import { DetailDocente } from "../../moleculas/DetailDocente";

const TablaArticulos = ({ hasChange }) => {
  const [articulos, setarticulos] = useState([]);

  useEffect(() => {
    (async () => {
      setarticulos(await getAllArticles());
    })();
  }, [hasChange]);

  return (
    <table>
      <thead>
        <tr>
          <HeaderTable text="Facultad" />
          <HeaderTable text="Código UG" />
          <HeaderTable text="Título" />
          <HeaderTable text="Base de datos indexada" />
          <HeaderTable text="Código ISBN" />
          <HeaderTable text="Tipo Indexación" />
          <HeaderTable text="Nombre revista" />
          <HeaderTable text="Número revista" />
          <HeaderTable text="Quartil" />
          <HeaderTable text="Factor de impacto" />
          <HeaderTable text="Campo detallado" />
          <HeaderTable text="Estado" />
          <HeaderTable text="Fecha publicación" />
          <HeaderTable text="Link publicación" />
          <HeaderTable text="Link Revista" />
          <HeaderTable text="Filación UG" />
          <HeaderTable text="Revisión por pares" />
          <HeaderTable text="Dominio Científico" />
          <HeaderTable text="Línea de investigación" />
          <HeaderTable text="Sublínea de investigación" />
          <HeaderTable text="Docentes" />
        </tr>
      </thead>
      <tbody>
        {articulos.map((articulo, index) => (
          <tr key={index}>
            <CellTable>{articulo.facultad}</CellTable>
            <CellTable>{articulo.codigo_ug} </CellTable>
            <CellTable>{articulo.titulo} </CellTable>
            <CellTable>{articulo.base_de_datos_indexada} </CellTable>
            <CellTable>{articulo.codigo_isbn}</CellTable>
            <CellTable> {articulo.tipo_indexacion} </CellTable>
            <CellTable>{articulo.nombre_revista} </CellTable>
            <CellTable>{articulo.numero_revista} </CellTable>
            <CellTable>{articulo.quartil} </CellTable>
            <CellTable>{articulo.factor_impacto} </CellTable>
            <CellTable>{articulo.campo_detallado} </CellTable>
            <CellTable>{articulo.estado} </CellTable>
            <CellTable> {articulo.fecha_publicacion}</CellTable>
            <CellTable>{articulo.link_publicacion} </CellTable>
            <CellTable>{articulo.link_revista} </CellTable>
            <CellTable> {articulo.filacion_ug}</CellTable>
            <CellTable>{articulo.revision_por_pares}</CellTable>
            <CellTable>{articulo.dominio_cientifico}</CellTable>
            <CellTable>{articulo.linea_investigacion} </CellTable>
            <CellTable>{articulo.sublinea_investigacion} </CellTable>
            <CellTable>
              {articulo.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </CellTable>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaArticulos;

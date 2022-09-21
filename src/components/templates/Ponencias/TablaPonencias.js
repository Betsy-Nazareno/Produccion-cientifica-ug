import React, { useEffect, useState } from "react";
import { getAllPonencias } from "../../../lib/services/ponencias.services";
import CellTable from "../../atomos/CellTable";
import HeaderTable from "../../atomos/HeaderTable";
import { DetailDocente } from "../../moleculas/DetailDocente";

const TablaPonencias = ({ hasChange }) => {
  const [ponencias, setponencias] = useState([]);

  useEffect(() => {
    (async () => {
      setponencias(await getAllPonencias());
    })();
  }, [hasChange]);

  return (
    <table>
      <thead>
        <tr>
          <HeaderTable text="Facultad" />
          <HeaderTable text="Código UG" />
          <HeaderTable text="Nombre Ponencia" />
          <HeaderTable text="Nombre Evento" />
          <HeaderTable text="Base de datos indexada" />
          <HeaderTable text="Código ISBN" />
          <HeaderTable text="Tipo Indexación" />
          <HeaderTable text="Edición evento" />
          <HeaderTable text="Organizador evento" />
          <HeaderTable text="Comité Científico" />
          <HeaderTable text="País" />
          <HeaderTable text="Ciudad" />
          <HeaderTable text="Fecha Publicación" />
          <HeaderTable text="Quartil" />
          <HeaderTable text="Factor Impacto" />
          <HeaderTable text="Campo Detallado" />
          <HeaderTable text="link Publicacion" />
          <HeaderTable text="Filación UG" />
          <HeaderTable text="Dominio Cientifico" />
          <HeaderTable text="Línea de investigación" />
          <HeaderTable text="Sublínea de investigación" />
          <HeaderTable text="Docentes" />
        </tr>
      </thead>
      <tbody>
        {ponencias.map((ponencia, index) => (
          <tr key={index}>
            <CellTable>{ponencia.facultad}</CellTable>
            <CellTable>{ponencia.codigo_ug} </CellTable>
            <CellTable>{ponencia.nombre_ponencia} </CellTable>
            <CellTable>{ponencia.nombre_evento} </CellTable>
            <CellTable>{ponencia.base_de_datos_indexada} </CellTable>
            <CellTable>{ponencia.codigo_isbn}</CellTable>
            <CellTable> {ponencia.tipo_indexacion} </CellTable>
            <CellTable>{ponencia.edicion_evento} </CellTable>
            <CellTable>{ponencia.organizador_evento} </CellTable>
            <CellTable>{ponencia.comite_cientifico} </CellTable>
            <CellTable>{ponencia.pais} </CellTable>
            <CellTable>{ponencia.ciudad} </CellTable>
            <CellTable>{ponencia.estado} </CellTable>
            <CellTable> {ponencia.fecha_publicacion}</CellTable>
            <CellTable>{ponencia.quartil} </CellTable>
            <CellTable>{ponencia.factor_impacto} </CellTable>
            <CellTable> {ponencia.campo_detallado}</CellTable>
            <CellTable>{ponencia.link_publicacion}</CellTable>
            <CellTable>{ponencia.filacion_ug}</CellTable>

            <CellTable>{ponencia.dominio_cientifico}</CellTable>
            <CellTable>{ponencia.linea_investigacion} </CellTable>
            <CellTable>{ponencia.sublinea_investigacion} </CellTable>
            <CellTable>
              {ponencia.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </CellTable>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaPonencias;

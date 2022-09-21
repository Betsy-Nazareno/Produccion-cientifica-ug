import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Spinner from "../../atomos/Spinner";
import { DetailDocente } from "../../moleculas/DetailDocente";
import ReactToPdf from "react-to-pdf";
import PrimaryButton from "../../atomos/PrimaryButton";
import { getPonenciasById } from "../../../lib/services/ponencias.services";

export const InidividualPonencias = () => {
  const router = useRouter();
  const [ponencia, setponencia] = useState();
  const ref = React.createRef();
  const chapterId = router.query.id;

  useEffect(() => {
    (async () => {
      setponencia(await getPonenciasById(chapterId));
    })();
  }, [router]);

  return !ponencia ? (
    <Spinner />
  ) : (
    <>
      <div className="my-8 text-xl mx-4">
        <div className="text-xl font-bold text-center mb-4 uppercase">
          ARTÍCULO: {ponencia.nombre_ponencia}{" "}
        </div>
        <div className="flex">
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Facultad</p>
              <p>{ponencia.facultad}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código UG</p>
              <p>{ponencia.codigo_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Nombre Evento</p>
              <p>{ponencia.nombre_evento}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Edicion Evento</p>
              <p>{ponencia.edicion_evento}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">País</p>
              <p>{ponencia.pais}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Ciudad</p>
              <p>{ponencia.ciudad}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Tipo Indexación</p>
              <p>{ponencia.tipo_indexacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Base de Datos Indexada</p>
              <p>{ponencia.base_de_datos_indexada}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código ISBN</p>
              <p>{ponencia.codigo_isbn}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Número de revista</p>
              <p>{ponencia.numero_revista}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Quartil</p>
              <p>{ponencia.quartil}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Factor Impacto</p>
              <p>{ponencia.factor_impacto}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Docentes</p>
              {ponencia.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </div>
          </div>
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Fecha publicación</p>
              <p>{ponencia.fecha_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Link publicación</p>
              <p>{ponencia.link_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Campo detallado</p>
              <p>{ponencia.campo_detallado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Filación UG</p>
              <p>{ponencia.filacion_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Revisión por pares</p>
              <p>{ponencia.revision_por_pares}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Dominio Científico</p>
              <p>{ponencia.dominio_cientifico}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Línea de investigación</p>
              <p>{ponencia.linea_investigacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">
                Sublínea de investigación
              </p>
              <p>{ponencia.sublinea_investigacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Estado</p>
              <p>{ponencia.estado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Link Revista</p>
              <p>{ponencia.link_revista}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Organizador Evento</p>
              <p>{ponencia.organizador_evento}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Comite Científico</p>
              <p>{ponencia.comite_cientifico}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Quartil</p>
              <p>{ponencia.quartil}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReactToPdf
          targetRef={ref}
          filename={`CERTIFICADO ${ponencia.nombre_ponencia}`}
        >
          {({ toPdf }) => (
            <PrimaryButton handleClick={toPdf} text="Descargar Certificado" />
          )}
        </ReactToPdf>
        <div style={{ background: "white", width: 900, padding: 50 }} ref={ref}>
          <div className="text-3xl">CERTIFICADO PRODUCCIÓN CIENTÍFICA</div>
          <div className="mt-24">
            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Título del ponencia:</p>
              <p className="">{ponencia.nombre_ponencia}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Nombre del docente:</p>
              <p className="">{ponencia.docentes[0]?.nombre}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Línea de investigación:</p>
              <p className="">{ponencia.linea_investigacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Fecha de publicación:</p>
              <p className="">{ponencia.fecha_publicacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Código ISBN:</p>
              <p className="">{ponencia.codigo_isbn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

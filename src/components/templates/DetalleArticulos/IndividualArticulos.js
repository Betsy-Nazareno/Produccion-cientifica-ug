import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Spinner from "../../atomos/Spinner";
import { DetailDocente } from "../../moleculas/DetailDocente";
import ReactToPdf from "react-to-pdf";
import PrimaryButton from "../../atomos/PrimaryButton";
import { getArticleById } from "../../../lib/services/articulos.services";

export const InidividualArticulos = () => {
  const router = useRouter();
  const [articulo, setarticulo] = useState();
  const ref = React.createRef();
  const chapterId = router.query.id;

  useEffect(() => {
    (async () => {
      setarticulo(await getArticleById(chapterId));
    })();
  }, [router]);

  return !articulo ? (
    <Spinner />
  ) : (
    <>
      <div className="my-8 text-xl mx-4">
        <div className="text-xl font-bold text-center mb-4 uppercase">
          ARTÍCULO: {articulo.titulo}{" "}
        </div>
        <div className="flex">
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Facultad</p>
              <p>{articulo.facultad}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código UG</p>
              <p>{articulo.codigo_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Tipo Indexación</p>
              <p>{articulo.tipo_indexacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Base de Datos Indexada</p>
              <p>{articulo.base_de_datos_indexada}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código ISBN</p>
              <p>{articulo.codigo_isbn}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Nombre Revista</p>
              <p>{articulo.nombre_revista}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Número de revista</p>
              <p>{articulo.numero_revista}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Quartil</p>
              <p>{articulo.quartil}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Factor Impacto</p>
              <p>{articulo.factor_impacto}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Docentes</p>
              {articulo.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </div>
          </div>
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Fecha publicación</p>
              <p>{articulo.fecha_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Link publicación</p>
              <p>{articulo.link_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Campo detallado</p>
              <p>{articulo.campo_detallado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Filación UG</p>
              <p>{articulo.filacion_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Revisión por pares</p>
              <p>{articulo.revision_por_pares}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Dominio Científico</p>
              <p>{articulo.dominio_cientifico}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Línea de investigación</p>
              <p>{articulo.linea_investigacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">
                Sublínea de investigación
              </p>
              <p>{articulo.sublinea_investigacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Estado</p>
              <p>{articulo.estado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Link Revista</p>
              <p>{articulo.link_revista}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReactToPdf targetRef={ref} filename={`CERTIFICADO ${articulo.titulo}`}>
          {({ toPdf }) => (
            <PrimaryButton handleClick={toPdf} text="Descargar Certificado" />
          )}
        </ReactToPdf>
        <div style={{ background: "white", width: 900, padding: 50 }} ref={ref}>
          <div className="text-3xl">CERTIFICADO PRODUCCIÓN CIENTÍFICA</div>
          <div className="mt-24">
            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Título del articulo:</p>
              <p className="">{articulo.titulo}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Nombre del docente:</p>
              <p className="">{articulo.docentes[0]?.nombre}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Línea de investigación:</p>
              <p className="">{articulo.linea_investigacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Fecha de publicación:</p>
              <p className="">{articulo.fecha_publicacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Código ISBN:</p>
              <p className="">{articulo.codigo_isbn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

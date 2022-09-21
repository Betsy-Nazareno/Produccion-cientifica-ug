import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getChapterById } from "../../../lib/services/capitulos.services";
import Spinner from "../../atomos/Spinner";
import { DetailDocente } from "../../moleculas/DetailDocente";
import ReactToPdf from "react-to-pdf";
import PrimaryButton from "../../atomos/PrimaryButton";

export const IndividualCapitulo = () => {
  const router = useRouter();
  const [capitulo, setcapitulo] = useState();
  const ref = React.createRef();
  const chapterId = router.query.id;

  useEffect(() => {
    (async () => {
      setcapitulo(await getChapterById(chapterId));
    })();
  }, [router]);

  return !capitulo ? (
    <Spinner />
  ) : (
    <>
      <div className="my-8 text-xl mx-4">
        <div className="text-xl font-bold text-center mb-4 uppercase">
          CAPÍTULO: {capitulo.titulo_capitulo}{" "}
        </div>
        <div className="flex">
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Facultad</p>
              <p>{capitulo.facultad}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Título Libro</p>
              <p>{capitulo.titulo_libro}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código UG</p>
              <p>{capitulo.codigo_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Título</p>
              <p>{capitulo.titulo}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código ISBN</p>
              <p>{capitulo.codigo_isbn}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Editor / Compilador</p>
              <p>{capitulo.editor_compilador}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Páginas</p>
              <p>{capitulo.paginas}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Docentes</p>
              {capitulo.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </div>
          </div>
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Fecha publicación</p>
              <p>{capitulo.fecha_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Link publicación</p>
              <p>{capitulo.link_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Campo detallado</p>
              <p>{capitulo.campo_detallado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Filación UG</p>
              <p>{capitulo.filacion_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Revisión por pares</p>
              <p>{capitulo.revision_por_pares}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Dominio Científico</p>
              <p>{capitulo.dominio_cientifico}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Línea de investigación</p>
              <p>{capitulo.linea_investigacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">
                Sublínea de investigación
              </p>
              <p>{capitulo.sublinea_investigacion}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReactToPdf
          targetRef={ref}
          filename={`CERTIFICADO ${capitulo.titulo_capitulo}`}
        >
          {({ toPdf }) => (
            <PrimaryButton handleClick={toPdf} text="Descargar Certificado" />
          )}
        </ReactToPdf>
        <div style={{ background: "white", width: 900, padding: 50 }} ref={ref}>
          <div className="text-3xl">CERTIFICADO PRODUCCIÓN CIENTÍFICA</div>
          <div className="mt-24">
            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Título del capítulo:</p>
              <p className="">{capitulo.titulo_capitulo}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Nombre del docente:</p>
              <p className="">{capitulo.docentes[0]?.nombre}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Línea de investigación:</p>
              <p className="">{capitulo.linea_investigacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Fecha de publicación:</p>
              <p className="">{capitulo.fecha_publicacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Código ISBN:</p>
              <p className="">{capitulo.codigo_isbn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

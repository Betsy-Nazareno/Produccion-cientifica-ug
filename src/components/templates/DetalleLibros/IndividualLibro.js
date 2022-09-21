import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBookById } from "../../../lib/services/libros.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { DetailDocente } from "../../moleculas/DetailDocente";
import ReactToPdf from "react-to-pdf";

export const IndividualLibro = () => {
  const router = useRouter();
  const [libro, setLibro] = useState();
  const ref = React.createRef();
  const bookId = router.query.id;

  useEffect(() => {
    (async () => {
      setLibro(await getBookById(bookId));
    })();
  }, [router]);

  return !libro ? (
    <Spinner />
  ) : (
    <>
      <div className="my-8 text-xl mx-4">
        <div className="text-xl font-bold text-center mb-4">
          LIBRO: {libro.titulo}{" "}
        </div>
        <div className="flex">
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Facultad</p>
              <p>{libro.facultad}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código UG</p>
              <p>{libro.codigo_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Título</p>
              <p>{libro.titulo}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Código ISBN</p>
              <p>{libro.codigo_isbn}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Editor / Compilador</p>
              <p>{libro.editor_compilador}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Páginas</p>
              <p>{libro.paginas}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Docentes</p>
              {libro.docentes.map((docente, index) => (
                <DetailDocente key={index} docente={docente} showInTable />
              ))}
            </div>
          </div>
          <div className="w-2/4">
            <div className="py-4">
              <p className="font-semibold text-green">Fecha publicación</p>
              <p>{libro.fecha_publicacion}</p>
            </div>
            <div className="py-4">
              <p className="font-semibold text-green">Link publicación</p>
              <p>{libro.link_publicacion}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Campo detallado</p>
              <p>{libro.campo_detallado}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Filación UG</p>
              <p>{libro.filacion_ug}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Revisión por pares</p>
              <p>{libro.revision_por_pares}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Dominio Científico</p>
              <p>{libro.dominio_cientifico}</p>
            </div>

            <div className="py-4">
              <p className="font-semibold text-green">Línea de investigación</p>
              <p>{libro.linea_investigacion}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReactToPdf targetRef={ref} filename={`CERTIFICADO ${libro.titulo}`}>
          {({ toPdf }) => (
            <PrimaryButton handleClick={toPdf} text="Descargar Certificado" />
          )}
        </ReactToPdf>
        <div style={{ background: "white", width: 900, padding: 50 }} ref={ref}>
          <div className="text-3xl">CERTIFICADO PRODUCCIÓN CIENTÍFICA</div>
          <div className="mt-24">
            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Título del libro:</p>
              <p className="">{libro.titulo}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Nombre del docente:</p>
              <p className="">{libro.docentes[0]?.nombre}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Línea de investigación:</p>
              <p className="">{libro.linea_investigacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Fecha de publicación:</p>
              <p className="">{libro.fecha_publicacion}</p>
            </div>

            <div className="flex gap-x-4 my-8 text-xl">
              <p className="font-bold">Código ISBN:</p>
              <p className="">{libro.codigo_isbn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

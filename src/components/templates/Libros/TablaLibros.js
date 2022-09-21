import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../../lib/services/libros.services";
import Spinner from "../../atomos/Spinner";
import { TarjetaResult } from "./TarjetaResult";

const TablaLibros = ({ hasChange }) => {
  const [libros, setLibros] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLibros(await getAllBooks());
      setisLoading(false);
    })();
  }, [hasChange]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap">
      {libros.map((libro, index) => (
        <TarjetaResult
          key={index}
          link={`libros/${libro.id}`}
          titulo={libro.titulo}
          codigo={libro.codigo_ug}
          facultad={libro.facultad}
        />
      ))}
    </div>
  );
};

export default TablaLibros;

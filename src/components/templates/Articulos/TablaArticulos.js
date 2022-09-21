import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../../lib/services/articulos.services";
import { TarjetaResult } from "../Libros/TarjetaResult";

const TablaArticulos = ({ hasChange }) => {
  const [articulos, setarticulos] = useState([]);

  useEffect(() => {
    (async () => {
      setarticulos(await getAllArticles());
    })();
  }, [hasChange]);

  return (
    <div className="flex flex-wrap">
      {articulos.map((articulo, index) => (
        <TarjetaResult
          key={index}
          link={`articulos/${articulo.id}`}
          titulo={articulo.titulo}
          codigo={articulo.codigo_ug}
          facultad={articulo.facultad}
        />
      ))}
    </div>
  );
};

export default TablaArticulos;

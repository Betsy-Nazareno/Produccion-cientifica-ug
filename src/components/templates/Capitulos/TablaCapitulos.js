import React, { useEffect, useState } from "react";
import { getAllChapters } from "../../../lib/services/capitulos.services";
import Spinner from "../../atomos/Spinner";
import { TarjetaResult } from "../Libros/TarjetaResult";

const TablaCapitulos = ({ hasChange }) => {
  const [capitulos, setcapitulos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setcapitulos(await getAllChapters());
      setisLoading(false);
    })();
  }, [hasChange]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap">
      {capitulos.map((capitulo, index) => (
        <TarjetaResult
          key={index}
          link={`capitulos/${capitulo.id}`}
          titulo={capitulo.titulo_capitulo}
          codigo={capitulo.codigo_ug}
          facultad={capitulo.facultad}
        />
      ))}
    </div>
  );
};

export default TablaCapitulos;

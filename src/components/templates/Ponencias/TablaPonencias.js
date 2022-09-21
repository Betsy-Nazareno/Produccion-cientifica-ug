import React, { useEffect, useState } from "react";
import { getAllPonencias } from "../../../lib/services/ponencias.services";
import Spinner from "../../atomos/Spinner";
import { TarjetaResult } from "../Libros/TarjetaResult";

const TablaPonencias = ({ hasChange }) => {
  const [ponencias, setponencias] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setponencias(await getAllPonencias());
      setisLoading(false);
    })();
  }, [hasChange]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap">
      {ponencias.map((ponencia, index) => (
        <TarjetaResult
          key={index}
          link={`ponencias/${ponencia.id}`}
          titulo={ponencia.nombre_ponencia}
          codigo={ponencia.codigo_ug}
          facultad={ponencia.facultad}
        />
      ))}
    </div>
  );
};

export default TablaPonencias;

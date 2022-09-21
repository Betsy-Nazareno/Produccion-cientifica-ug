import React, { useState } from "react";

export const DetailDocente = ({ docente, showInTable }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      key={docente.cedula}
      className="cursor-pointer my-3"
      onClick={() => setShowMore(!showMore)}
    >
      <span
        className={`text-base ${showInTable ? "font-normal" : "font-bold"}`}
      >
        {docente.nombre}
      </span>
      {!showInTable && !showMore && (
        <span className="text-green"> - {docente.participacion}</span>
      )}
      {showMore && (
        <div className="ml-4">
          <p>
            <span className="font-medium text-green">Cédula:</span>{" "}
            {docente.cedula}
          </p>
          <p>
            <span className="font-medium text-green">Participación:</span>{" "}
            {docente.participacion}
          </p>
          <p>
            <span className="font-medium text-green">Modalidad:</span>{" "}
            {docente.modalidad}
          </p>
          <p>
            <span className="font-medium text-green">Facultad:</span>{" "}
            {docente.facultad}
          </p>
        </div>
      )}
    </div>
  );
};

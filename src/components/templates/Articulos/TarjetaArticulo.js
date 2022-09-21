import React from "react";

export const TarjetaArticulo = ({ articulo }) => {
  return (
    <div className="p-4 border-[2px] border-solid border-blue-light rounded-xl shadow-sm hover:bg-blue-light hover:cursor-pointer">
      <p className="font-semibold text-xl">{articulo.titulo}</p>
      <p className="text-green text-base mt-5">{articulo.codigo_ug}</p>
    </div>
  );
};

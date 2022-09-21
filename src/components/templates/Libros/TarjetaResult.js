import Link from "next/link";
import React from "react";

export const TarjetaResult = ({ link, titulo, codigo, facultad }) => {
  return (
    <Link href={link}>
      <div className="p-4 border-[2px] border-solid border-blue-light rounded-xl shadow-sm hover:bg-blue-light hover:cursor-pointer w-[23%] m-2">
        <p className="font-normal text-base capitalize min-h-[8rem]">
          {titulo} - {codigo}
        </p>
        <p className="text-green text-base mt-5">{facultad}</p>
      </div>
    </Link>
  );
};

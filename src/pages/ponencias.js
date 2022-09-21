import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";
import PonenciasTemplate from "../components/templates/Ponencias/PonenciasTemplate";

const Ponencias = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Ponencias</title>
        <meta name="description" content="Ponencias" />
      </Head>
      <PonenciasTemplate />
    </BasePaginas>
  );
};

export default Ponencias;

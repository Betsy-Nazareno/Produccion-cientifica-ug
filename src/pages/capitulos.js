import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";
import CapitulosTemplate from "../components/templates/Capitulos/CapitulosTemplate";

const Capitulos = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Capítulos</title>
        <meta name="description" content="Capítulos" />
      </Head>
      <CapitulosTemplate />
    </BasePaginas>
  );
};

export default Capitulos;

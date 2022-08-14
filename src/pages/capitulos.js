import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";

const Capitulos = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Capítulos</title>
        <meta name="description" content="Capítulos" />
      </Head>
      <div>Capítulos</div>
    </BasePaginas>
  );
};

export default Capitulos;

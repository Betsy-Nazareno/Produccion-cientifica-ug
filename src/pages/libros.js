import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";
import LibrosTemplate from "../components/templates/Libros/LibrosMain";

const Libros = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Libros</title>
        <meta name="description" content="Libros" />
      </Head>
      <LibrosTemplate />
    </BasePaginas>
  );
};

export default Libros;

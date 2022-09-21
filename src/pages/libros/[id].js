import Head from "next/head";
import React from "react";
import { IndividualLibro } from "../../components/templates/DetalleLibros/IndividualLibro";
import BasePaginas from "../../components/templates/BasePaginas";

const Libros = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Libros</title>
        <meta name="description" content="Libros" />
      </Head>
      <IndividualLibro />
    </BasePaginas>
  );
};

export default Libros;

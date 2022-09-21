import Head from "next/head";
import React from "react";
import BasePaginas from "../../components/templates/BasePaginas";
import { IndividualCapitulo } from "../../components/templates/DetalleCapitulos/IndividualCapitulo";

const Capitulo = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Capítulo</title>
        <meta name="description" content="Libros" />
      </Head>
      <IndividualCapitulo />
    </BasePaginas>
  );
};

export default Capitulo;

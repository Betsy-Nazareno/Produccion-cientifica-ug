import Head from "next/head";
import React from "react";
import BasePaginas from "../../components/templates/BasePaginas";
import { InidividualArticulos } from "../../components/templates/DetalleArticulos/IndividualArticulos";

const Capitulo = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Artículo</title>
        <meta name="description" content="Articulo" />
      </Head>
      <InidividualArticulos />
    </BasePaginas>
  );
};

export default Capitulo;

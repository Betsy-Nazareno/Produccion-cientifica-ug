import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";

const Articulos = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Artículos</title>
        <meta name="description" content="Artículos" />
      </Head>
      <div>Artículos</div>
    </BasePaginas>
  );
};

export default Articulos;

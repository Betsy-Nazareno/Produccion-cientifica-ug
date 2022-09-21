import Head from "next/head";
import React from "react";
import ArticulosTemplate from "../components/templates/Articulos/ArticulosMain";
import BasePaginas from "../components/templates/BasePaginas";

const Articulos = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Artículos</title>
        <meta name="description" content="Artículos" />
      </Head>
      <ArticulosTemplate />
    </BasePaginas>
  );
};

export default Articulos;

import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";

const Ponencias = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Ponencias</title>
        <meta name="description" content="Ponencias" />
      </Head>
      <div>Ponencias</div>
    </BasePaginas>
  );
};

export default Ponencias;

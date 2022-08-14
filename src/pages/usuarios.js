import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";

const Usuarios = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Usuarios</title>
        <meta name="description" content="Usuarios" />
      </Head>
      <div>Usuarios</div>
    </BasePaginas>
  );
};

export default Usuarios;

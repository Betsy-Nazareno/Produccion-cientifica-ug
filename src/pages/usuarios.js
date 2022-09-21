import Head from "next/head";
import React from "react";
import BasePaginas from "../components/templates/BasePaginas";
import UsuariosTemplate from "../components/templates/Usuarios/UsuariosMain";

const Usuarios = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Usuarios</title>
        <meta name="description" content="Usuarios" />
      </Head>
      <UsuariosTemplate />
    </BasePaginas>
  );
};

export default Usuarios;

import Head from "next/head";
import React from "react";
import BasePaginas from "../../components/templates/BasePaginas";
import { InidividualPonencias } from "../../components/templates/DetallePonencias/IndividualPonencias";

const Ponencias = () => {
  return (
    <BasePaginas>
      <Head>
        <title>Ponencias</title>
        <meta name="description" content="Ponencias" />
      </Head>
      <InidividualPonencias />
    </BasePaginas>
  );
};

export default Ponencias;

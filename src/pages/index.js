import Head from "next/head";
import Image from "next/image";
import BaseAuth from "../components/templates/BaseAuth";
import Login from "../components/templates/Login";

export default function Home() {
  return (
    <BaseAuth>
      <div>
        <Head>
          <title>Inicio de sesión</title>
          <meta
            name="description"
            content="Inicio de sesión a produccion cientifica ug"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-container h-screen">
          <Login />
        </div>
      </div>
    </BaseAuth>
  );
}

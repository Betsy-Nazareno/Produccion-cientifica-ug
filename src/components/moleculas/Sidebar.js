import { useRouter } from "next/router";
import React from "react";
import BadgeSideBar from "../atomos/BadgeSideBar";

const SideBar = () => {
  const router = useRouter();

  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    router.push("/");
  };

  const handleClick = (page) => {
    window.localStorage.setItem("sesion", JSON.stringify({ page }));
    router.push(page);
  };

  return (
    <div className="min-h-[90vh] bg-[#E9F6FF] w-2/12 sticky pl-4 pt-8 flex flex-col gap-y-4 relative">
      <BadgeSideBar
        text={"Libros"}
        source="/libro-icon.png"
        value="libros"
        handleClick={handleClick}
      />
      <BadgeSideBar
        text={"Capítulos"}
        source="/capitulo-libro.png"
        value="capitulos"
        handleClick={handleClick}
      />
      <BadgeSideBar
        text={"Artículos"}
        source="/articulo-icon.png"
        value="articulos"
        handleClick={handleClick}
      />
      <BadgeSideBar
        text={"Ponencias"}
        source="/ponencia-icon.png"
        value="ponencias"
        handleClick={handleClick}
      />
      <BadgeSideBar
        text={"Usuarios"}
        source="/usuarios-icon.png"
        value="usuarios"
        handleClick={handleClick}
      />
      <div className="absolute bottom-2 w-11/12" onClick={handleLogOut}>
        <BadgeSideBar
          text={"Cerrar Sesión"}
          source="/log-out.png"
          value="logout"
          handleClick={() => {
            return;
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;

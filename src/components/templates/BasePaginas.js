import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../moleculas/Navbar";
import SideBar from "../moleculas/Sidebar";

const AppContext = React.createContext();

const BasePaginas = ({ children }) => {
  const router = useRouter();
  const [sesion, setSesion] = useState("libros");
  const [user, setUser] = useState(undefined);
  const isMounted = useRef();

  const handleSesion = (value) => {
    setSesion(value);
  };

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    setUser(user);
    isMounted.current = true;
  }, []);

  if (isMounted.current && !user) {
    router.push("/");
  }

  return (
    <AppContext.Provider value={{ sesion, handleSesion }}>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex">
          <SideBar />
          <div className="w-10/12 pl-4">{children}</div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
export default BasePaginas;

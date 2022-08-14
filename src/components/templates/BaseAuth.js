import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BaseAuth = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    setUser(user);
  }, []);

  if (user) {
    router.push("/libros");
  }

  return <>{children}</>;
};

export default BaseAuth;

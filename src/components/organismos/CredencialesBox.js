import React, { useState } from "react";
import { loginUser } from "../../lib/services/users.services";
import Input from "../atomos/Input";
import PrimaryButton from "../atomos/PrimaryButton";
import { useRouter } from "next/router";
import ErrorField from "../atomos/ErrorField";
import Spinner from "../atomos/Spinner";

const CredencialesBox = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState("");

  const iniciarSesion = async () => {
    setIsLoading(true);
    const response = await loginUser(username, password);
    if (!response) {
      setFailed("Usuario o contraseña incorrectos");
    } else {
      if (window !== "undefined") {
        window.localStorage.setItem("user", JSON.stringify(response));
        await router.push("/libros");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white py-24 px-28 rounded-xl w-6/12">
      <Input
        text={username}
        setText={setUsername}
        label="Nombre de usuario"
        placeholder="alguien@example.com"
      />
      <div className="pt-8">
        <Input
          type="password"
          text={password}
          setText={setPassword}
          label="Contraseña"
          placeholder="*****"
        />
      </div>

      {failed && <ErrorField message={failed} />}
      <div className="pt-8 flex justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton
            text={"Iniciar sesión"}
            handleClick={() => iniciarSesion()}
          />
        )}
      </div>
    </div>
  );
};

export default CredencialesBox;

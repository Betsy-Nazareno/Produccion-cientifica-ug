import React from "react";
import Navbar from "../moleculas/Navbar";
import CredencialesBox from "../organismos/CredencialesBox";

const Login = () => {
  return (
    <div className="h-[100vh] bg-black bg-opacity-40">
      <Navbar />
      <div className="mt-[6%] w-full flex items-center justify-center">
        <CredencialesBox />
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-[#1E6292] flex items-center justify-center relative sticky top-0 z-40">
      <p className="text-2xl text-center text-white font-bold">
        Producción científica Universidad de Guayaquil
      </p>
      <div className="absolute right-12">
        <Image src="/logoUg-white.png" width={50} height={50} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;

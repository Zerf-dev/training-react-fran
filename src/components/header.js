import logo from "@/assets/logo.png";
import usuario from "@/assets/usuario.png";
import Image from "next/image";
import Flecha from "@/assets/flecha.svg";

export default function () {
  return (
    <div className="w-screen p-4 flex flex-row justify-between ">
      <div className="">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex flex-row items-center">
        <Image src={usuario} alt="Logo" />
        <p>nombre usuario</p>
          <Flecha className="w-4 pl-1"/>
      </div>
    </div>
  );
}

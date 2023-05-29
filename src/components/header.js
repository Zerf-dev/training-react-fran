import logo from "@/assets/logo.png";
import user from "@/assets/user.png";
import Image from "next/image";
import Arrow from "@/assets/arrow.svg";

export default function () {
  return (
    <div className="w-screen p-4 flex flex-row justify-between ">
      <div className="">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex flex-row items-center">
        <Image src={user} alt="Logo" />
        <p>nombre usuario</p>
        <Arrow className="w-4 pl-1" />
      </div>
    </div>
  );
}

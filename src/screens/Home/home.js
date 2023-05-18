import Header from "@/components/header";
import Footer from "@/components/footer";
import banner from "./assets/heroimg.png";
import Image from "next/image";
import { useState } from "react";
import HomeBody from "./components/homeBody";

export default function HomeScreen() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <Header />
      <div className="mx-4 h-full relative">
        <Image src={banner} className="w-full rounded-3xl" alt="Banner" />
        <div className="absolute top-1/2 left-1/2 text-center">
          <p className="">NUESTRAS RECETAS</p>
          <p>¿Que querias cocinar hoy?</p>
        </div>
      </div>
      <div className="  w-2/3 mt-10 mx-auto flex">
          <HomeBody/>
      </div>
      <Footer/>
    </>
  );
}

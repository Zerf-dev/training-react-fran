import Header from "@/components/header";
import banner from './heroimg.png'
import Image from "next/image";

export default function HomeScreen() {
  return (
    <>
        <Header/>
      <div className="mx-4 relative top-0 left-0" >
        <Image  src={banner} className="w-full rounded-3xl" alt="Banner" />
        <h1 className="absolute top-2/4 left-">NUESTRAS RECETAS</h1>
      </div>
    </>
  );
}

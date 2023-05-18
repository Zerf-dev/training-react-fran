import Image from "next/image";
import Estrella from "../assets/Estrella.svg";
import EstrellaBlanca from "../assets/Estrella Blanca.svg"

export default function Card({ img, name, favourite }) {
  return (
    <div className="w-full h-full relative ">
      <Image src={img} width={400} height={400} alt="Card" className="rounded-lg" />
      <p className="py-1 pl-1 w-full font-bold absolute bottom-0 bg-white/75 rounded-t-md">
        {name}
      </p>
      {favourite ? (
        <Estrella className="absolute right-0 top-0 mt-2 mr-2 bg-white/75 rounded-lg" />
      ) : (
        <EstrellaBlanca className="absolute right-0 top-0 mt-2 mr-2 bg-white/75 rounded-lg" />
      )}
    </div>
  );
}

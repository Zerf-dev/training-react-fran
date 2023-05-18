import riquissimaGris from "../assets/riquíssima gris.png";
import sobre from "../assets/sobre.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-4 border-t w-screen flex flex-row justify-around align-middle">
      <Image className="m-10" src={riquissimaGris} alt="Ruiquíssima" />
      <div className="m-10 flex flex-col">
        <div className="flex flex-row justify-end">
          <Image className="px-1 w-8"  src={sobre} width={10} height={9} alt="img" />
          <p className="text-gray-600 text-sm underline">
            hola@riquissima.com.ar
          </p>
        </div>
        <p className="text-gray-600 text-sm ">
          ©Hearst Magazine Media, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

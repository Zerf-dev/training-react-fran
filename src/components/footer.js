import riquissimaGris from "../assets/riquíssima gris.png";
import sobre from "../assets/sobre.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-4 border-t w-screen flex justify-center flex-col md:flex-row md:justify-around md:align-middle">
      <Image className="my-8 m-auto md:m-10" src={riquissimaGris}  alt="Ruiquíssima" />
      <div className="mb-10 mt-0 flex flex-col md:m-10">
        <div className="flex flex-row justify-center md:justify-end">
          <Image className="px-1 w-8"  src={sobre} width={10} height={9} alt="img" />
          <p className="text-gray-600 text-sm underline">
            hola@riquissima.com.ar
          </p>
        </div>
        <p className="text-gray-600 text-sm text-center">
          ©Hearst Magazine Media, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

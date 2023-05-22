import Header from "@/components/header";
import Footer from "@/components/footer";
import banner from "./assets/heroimg.png";
import bannerMobile from "./assets/heroimg mobile.png";
import Image from "next/image";
import HomeBody from "./components/homeBody";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import recipeActions from "@/redux/recipes/actions";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeActions.getAllRecipes());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="border-b-2">
        <div className="mx-4 h-full relative">
          <Image src={banner} className="w-full rounded-3xl" alt="Banner" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-bold text-base  md:text-5xl">NUESTRAS RECETAS</p>
            <p className=" text-xs md:font-bold md:text-base">
              ¿Que querias cocinar hoy?
            </p>
          </div>
        </div>
        <div className=" m-4 mt-10 md:w-2/3 md:mx-auto ">
          <HomeBody />
        </div>
      </div>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import banner from "./assets/heroimg.png";
import bannerMobile from "./assets/heroimg mobile.png";
import Image from "next/image";
import HomeBody from "./components/HomeBody";
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

          <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-bold text-3xl md:text-5xl">
              NUESTRAS RECETAS
            </div>
            <div className="text-base font-semibold md:font-bold">
              ¿Que querias cocinar hoy?
            </div>
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
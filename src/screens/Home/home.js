import Header from "@/components/header";
import Footer from "@/components/footer";
import banner from "./assets/heroimg.png";
import Image from "next/image";
import HomeBody from "./components/homeBody";
import {useEffect } from "react";
import { useDispatch } from "react-redux";
import recipeActions from "@/redux/recipes/actions";
import { getAllRecipies } from "@/services/recipes";

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(()=>{getAllRecipies().then((data)=>{dispatch(recipeActions.fetchRecipes(data))})},[])
  useDispatch(recipeActions.fetchRecipes());
  return (
    <>
      <Header />
      <div className="mx-4 h-full relative">
        <Image src={banner} className="w-full rounded-3xl" alt="Banner" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-bold text-5xl">NUESTRAS RECETAS</p>
          <p className="font-bold">¿Que querias cocinar hoy?</p>
        </div>
      </div>
      <div className="  w-2/3 mt-10 mx-auto flex">
        <HomeBody />
      </div>
      <Footer />
    </>
  );
}

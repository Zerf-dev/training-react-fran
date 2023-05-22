import Image from "next/image";
import Estrella from "../assets/Estrella.svg";
import EstrellaBlanca from "../assets/Estrella Blanca.svg";

import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/redux/recipes/actions";



export default function Card({ recipe }) {
  
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);

  const dispatch = useDispatch();
  const addFavourite = (recipe) => dispatch(recipeActions.addFavourite(recipe));
  const removeFavourite = (recipe) =>
    dispatch(recipeActions.removeFavourite(recipe));

  return (
    <div className="w-full h-full md:max-w-sm relative">
      <Image
        src={recipe.image}
        width={400}
        height={400}
        alt="Card"
        className="object-cover rounded-2xl w-full h-60 md:object-fill md:h-full "
      />
      {favouriteRecipes.some((favourite) => favourite.id === recipe.id) ? (
        <button
          onClick={() => {
            removeFavourite(recipe);
          }}
          className="absolute left-0 top-0 mt-2 ml-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
        >
          <Estrella className="" />
        </button>
      ) : (
        <button
          onClick={() => {
            addFavourite(recipe);
          }}
          className="absolute left-0 top-0 mt-2 ml-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
        >
          <EstrellaBlanca className="" />
        </button>
      )}
    </div>
  );
}

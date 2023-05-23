import Image from "next/image";
import Estrella from "@/screens/Home/assets/Estrella.svg";
import EstrellaBlanca from "@/screens/Home/assets/Estrella Blanca.svg";

import { useDispatch, useSelector } from "react-redux";
import recipeActions, { actionCreators } from "@/redux/recipes/actions";
import Link from "next/link";

export default function Card({ recipe }) {
 
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);

  const dispatch = useDispatch();
  const addFavourite = (recipe) => dispatch(recipeActions.addFavourite(recipe));
  const removeFavourite = (recipe) =>
    dispatch(recipeActions.removeFavourite(recipe));
  

  return (
    <div className="w-full h-full relative ">
      <Link
        href={`/recipes/${recipe.id}`}
        className=""
      >
        <Image
          src={recipe.image}
          width={400}
          height={400}
          alt="Card"
          className="object-cover rounded-lg h-60 w-full md:object-fill md:h-full "
        />
        <p className="py-2.5 pl-2 w-full text-sm font-bold absolute bottom-0 bg-white/75 rounded-t-md md:text-xs md:pl-1 md:py-1 lg:text-sm xl:text-base">
          {recipe.name.toUpperCase()}
        </p>
      </Link>
      {favouriteRecipes.some((favourite) => favourite.id === recipe.id) ? (
        <button
          onClick={() => {
            removeFavourite(recipe);
          }}
          className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
        >
          <Estrella className="" />
        </button>
      ) : (
        <button
          onClick={() => {
            addFavourite(recipe);
          }}
          className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
        >
          <EstrellaBlanca className="" />
        </button>
      )}
    </div>
  );
}

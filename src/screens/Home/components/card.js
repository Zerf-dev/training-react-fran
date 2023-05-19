import Image from "next/image";
import Estrella from "../assets/Estrella.svg";
import EstrellaBlanca from "../assets/Estrella Blanca.svg";

import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/redux/recipes/actions";

export default function Card({ recipeId }) {
  const recipe = useSelector((state) => state.recipes.recipes).find(
    (recipe) => recipe.id === recipeId
  );
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);

  const dispatch = useDispatch();
  const addFavourite = (recipe) => dispatch(recipeActions.addFavourite(recipe));
  const removeFavourite = (recipe) => dispatch(recipeActions.removeFavourite(recipe));

  return (
    <div className="w-full h-full relative ">
      <Image
        src={recipe.image}
        width={400}
        height={400}
        alt="Card"
        className="rounded-lg h-px400 w-px400"
      />
      <p className="py-1 pl-1 w-full font-bold absolute bottom-0 bg-white/75 rounded-t-md">
        {recipe.name}
      </p>
      {favouriteRecipes.some((favourite) => favourite.id === recipe.id) ? (
        <button
          onClick={() => {
            removeFavourite(recipe);
          }}
          className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-white/75 rounded-xl"
        >
          <Estrella className="" />
        </button>
      ) : (
        <button
          onClick={() => {
            addFavourite(recipe);
          }}
          className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-white/75 rounded-xl"
        >
          <EstrellaBlanca className="" />
        </button>
      )}
    </div>
  );
}

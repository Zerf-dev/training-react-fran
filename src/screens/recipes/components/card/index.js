import Image from "next/image";
import Star from "@/screens/recipes/assets/Star.svg";
import WhiteStar from "@/screens/recipes/assets/WhiteStar.svg";

import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/redux/recipes/actions";

export default function Card({ recipe }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const isFavourite = favouriteRecipes.some(
    (favourite) => favourite.id === recipe.id
  );
  const dispatch = useDispatch();
  const handleFavourite = (recipe) =>
    dispatch(recipeActions.handleFavourite(recipe));

  return (
    <div className="w-full h-full md:max-w-sm relative">
      <Image
        src={recipe.image}
        width={400}
        height={400}
        alt="Card"
        className="object-cover rounded-2xl w-full h-60 md:object-fill md:h-full "
      />
      <button
        onClick={() => {
          handleFavourite(recipe);
        }}
        className="absolute left-0 top-0 mt-2 ml-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
      >
        {isFavourite ? <Star /> : <WhiteStar />}
      </button>
    </div>
  );
}

import Image from "next/image";
import Star from "@/screens/Home/assets/Star.svg";
import WhiteStar from "@/screens/Home/assets/WhiteStar.svg";
import { ROUTES } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/redux/recipes/actions";
import Link from "next/link";
import cx from "classnames";

export default function Card({ recipe, fromRecipes = false }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const isFavourite = favouriteRecipes.some(
    (favourite) => favourite.id === recipe.id
  );
  const dispatch = useDispatch();
  const handleFavourite = (recipe) =>
    dispatch(recipeActions.handleFavourite(recipe));

  return (
    <div
      className={cx("w-full h-full relative", { "md:max-w-sm": fromRecipes })}
    >
      <Link href={`${ROUTES.RECIPES}/${recipe.id}`} className="">
        <Image
          src={recipe.image}
          width={400}
          height={400}
          alt="Card"
          className="object-cover rounded-xl h-60 w-full md:object-cover md:h-full "
        />

        {!fromRecipes && (
          <p className="uppercase py-3 pl-2.5 w-full text-sm font-semibold absolute bottom-0 bg-white/75 backdrop-blur-sm rounded-t-md rounded-b-xl md:text-xs md:pl-2 md:py-2.5 lg:text-sm xl:text-base">
            {recipe.name}
          </p>
        )}
      </Link>

      <button
        onClick={() => {
          handleFavourite(recipe);
        }}
        className={cx(
          "absolute top-0 mt-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2",
          { "left-0 ml-2": fromRecipes, "right-0 mr-2": !fromRecipes }
        )}
      >
        {isFavourite ? <Star /> : <WhiteStar />}
      </button>
    </div>
  );
}

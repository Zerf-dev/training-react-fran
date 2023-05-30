import Image from "next/image";
import Star from "@/screens/Home/assets/Star.svg";
import WhiteStar from "@/screens/Home/assets/WhiteStar.svg";
import { ROUTES } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import recipeActions from "@/redux/recipes/actions";
import Link from "next/link";
import classNames from "classnames/bind";

const cx = classNames.bind({
  base: "w-full h-full relative",
  fromRecipes: "md:max-w-sm",
});

export default function Card({ recipe, fromRecipes = false }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const isFavourite = favouriteRecipes.some(
    (favourite) => favourite.id === recipe.id
  );
  const dispatch = useDispatch();
  const handleFavourite = (recipe) =>
    dispatch(recipeActions.handleFavourite(recipe));

  return (
    <div className={cx({ base: true, fromRecipes: fromRecipes })}>
      <Link href={`${ROUTES.RECIPES}/${recipe.id}`} className="">
        <Image
          src={recipe.image}
          width={400}
          height={400}
          alt="Card"
          className="object-cover rounded-2xl h-60 w-full md:object-cover md:h-full "
        />

        <p className="py-2.5 pl-2 w-full text-sm font-bold absolute bottom-0 bg-white/75 rounded-t-md md:text-xs md:pl-1 md:py-1 lg:text-sm xl:text-base">
          {recipe.name.toUpperCase()}
        </p>
      </Link>

      <button
        onClick={() => {
          handleFavourite(recipe);
        }}
        className={
          fromRecipes
            ? "absolute top-0 left-0 ml-2 mt-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
            : "absolute top-0 right-0 mr-2 mt-2 p-2 bg-white/75 rounded-xl md:p-1 lg:p-2"
        }
      >
        {isFavourite ? <Star /> : <WhiteStar />}
      </button>
    </div>
  );
}

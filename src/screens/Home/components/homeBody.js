import Search from "../assets/search.svg";
import Cross from "../assets/cross.svg";
import RecipeList from "./recipeList";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const selectedStyle =
  "text-sm  p-1 my-4 mx-1 md:m-1 lg:text-base lg:mr-3 font-bold border-b-2 border-riquissima";
const unselecteStyle = "text-sm p-1 my-4 mx-1 md:m-1 lg:text-base lg:mr-3";

export default function HomeBody() {
  const [showFavourites, setShowFavourites] = useState(false);
  const [allRecipesStyle, setAllResipesStyle] = useState(selectedStyle);
  const [favouriteRecipesStyle, setFavouriteRecipesStyle] =
    useState(unselecteStyle);

  const recipes = useSelector((state) => state.recipes.recipes);
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full">
      <div className="p-0.5 w-full flex flex-row border border-red-800 rounded-md">
        <Search className="px-1 w-9 relative top-0.5" />
        <input
          name="buscador"
          className="w-full outline-none"
          type="text"
          placeholder="Buscá una receta"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        {searchValue !== "" && (
          <button onClick={() => setSearchValue("")} className="px-2">
            <Cross />
          </button>
        )}
      </div>
      <div className="w-auto md:mx-5">
        <div className="flex flex-col justify-between my-3 md:flex-row">
          <div className="flex justify-around md:justify-start">
            <button
              className={allRecipesStyle}
              onClick={() => {
                setShowFavourites(false);
                setAllResipesStyle(selectedStyle);
                setFavouriteRecipesStyle(unselecteStyle);
              }}
            >
              Todas las recetas ({recipes.length})
            </button>
            <button
              className={favouriteRecipesStyle}
              onClick={() => {
                setShowFavourites(true);
                setAllResipesStyle(unselecteStyle);
                setFavouriteRecipesStyle(selectedStyle);
              }}
            >
              Recetas favoritas ({favouriteRecipes.length})
            </button>
          </div>
          <Link href={"/newRecipe"}>
          <button className="text-white p-2 bg-riquissima rounded-lg font-bold ">
            + Agregar Receta
          </button>
          </Link>
        </div>
        <RecipeList showFavourites={showFavourites} search={searchValue} />
      </div>
    </div>
  );
}

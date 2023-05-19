import Search from "../assets/search.svg";
import Cross from "../assets/cross.svg";
import RecipeList from "./recipeList";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function HomeBody() {
  const [showFavourites, setShowFavourites] = useState(false);
  const [allRecipesStyle, setAllResipesStyle] = useState(
    "font-bold p-1 m-1 mr-3 border-b-2 border-riquissima"
  );
  const [favouriteRecipesStyle, setFavouriteRecipesStyle] =
    useState("p-1 m-1 mr-3");

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
      <div className="w-auto mx-5">
        <div className="flex justify-between my-3">
          <div>
            <button
              className={allRecipesStyle}
              onClick={() => {
                setShowFavourites(false);
                setAllResipesStyle(
                  "font-bold p-1 m-1 mr-3 border-b-2 border-riquissima"
                );
                setFavouriteRecipesStyle("p-1 m-1 mr-3");
              }}
            >
              Todas las recetas ({recipes.length})
            </button>
            <button
              className={favouriteRecipesStyle}
              onClick={() => {
                setShowFavourites(true);
                setAllResipesStyle("p-1 m-1 mr-3");
                setFavouriteRecipesStyle(
                  "font-bold p-1 m-1 mr-3 border-b-2 border-riquissima"
                );
              }}
            >
              Recetas favoritas ({favouriteRecipes.length})
            </button>
          </div>
          <button className="text-white p-2 bg-riquissima rounded-lg font-bold ">
            + Agregar Receta
          </button>
        </div>
        <RecipeList showFavourites={showFavourites} search={searchValue} />
      </div>
    </div>
  );
}

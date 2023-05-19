import Card from "./card";
import { useSelector } from "react-redux";
import MapRecipes from "./mapRecipes";

/*
const recipesFavoritas = [
  recipes.at(1),
  recipes.at(5),
  recipes.at(6),
  recipes.at(7),
];*/

export default function RecipeList({ showFavourites, search = "" }) {
  const FavouriteRecipes = useSelector((state) => state.recipes.favourites);
  const recipes = useSelector((state) => state.recipes.recipes);
  const re = new RegExp(search, "i");
  const searchResults = [];

  if (showFavourites) {
    {
      const searchResults = FavouriteRecipes.filter((favourite) =>
        Object.values(favourite).some(
          (val) => typeof val === "string" && val.match(re)
        )
      );
      return <MapRecipes recipes={searchResults} />;
    }
  } else {
    {
      const searchResults = recipes.filter((recipe) =>
        Object.values(recipe).some(
          (val) => typeof val === "string" && val.match(re)
        )
      );
      return <MapRecipes recipes={searchResults} />;
    }
  }
}

import { useSelector } from "react-redux";
import { CATEGORIES } from "../../../../constants/routes";
import MapRecipes from "./components/MapRecipes";

export default function listRecipes({ showFavourites, search = "" }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const recipes = useSelector((state) => state.recipes.recipes);
  const searchResult = showFavourites
    ? favouriteRecipes.filter(
        (favourite) =>
          favourite.name.toUpperCase().includes(search.toUpperCase()) ||
          CATEGORIES.find((category) => category.id === favourite.category)
            .name.toUpperCase()
            .includes(search.toUpperCase())
      )
    : recipes.filter(
        (recipe) =>
          recipe.name.toUpperCase().includes(search.toUpperCase()) ||
          CATEGORIES.find((category) => category.id === recipe.category)
            .name.toUpperCase()
            .includes(search.toUpperCase())
      );

  return <MapRecipes recipes={searchResult} />;
}

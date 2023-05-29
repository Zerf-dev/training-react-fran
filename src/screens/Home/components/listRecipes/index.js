import { useSelector } from "react-redux";
import { CATEGORIES } from "../../../../components/constants";
import MapRecipes from "./components/mapRecipes";

export default function listRecipes({ showFavourites, search = "" }) {
  if (showFavourites) {
    const favouriteRecipes = useSelector((state) => state.recipes.favourites);
    const searchResult = favouriteRecipes.filter(
      (favourite) =>
        favourite.name.toUpperCase().includes(search.toUpperCase()) ||
        CATEGORIES.find((category) => category.id === favourite.category)
          .name.toUpperCase()
          .includes(search.toUpperCase())
    );
    return <MapRecipes recipes={searchResult} />;
  } else {
    const recipes = useSelector((state) => state.recipes.recipes);
    const searchResult = recipes.filter(
      (recipe) =>
        recipe.name.toUpperCase().includes(search.toUpperCase()) ||
        CATEGORIES.find((category) => category.id === recipe.category)
          .name.toUpperCase()
          .includes(search.toUpperCase())
    );

    return <MapRecipes recipes={searchResult} />;
  }
}

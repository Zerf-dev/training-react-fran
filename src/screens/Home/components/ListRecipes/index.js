import { useSelector } from "react-redux";
import { CATEGORIES } from "@/constants/categories";
import MapRecipes from "./components/RecipesList";

export default function ListRecipes({ showFavourites, search = "" }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const recipes = useSelector((state) => state.recipes.recipes);
  const searchRecipes = (recipes, search) => {
    return recipes.filter(
      (recipe) =>
        recipe.name.toUpperCase().includes(search.toUpperCase()) ||
        CATEGORIES.find((category) => category.id === recipe.category)
          .name.toUpperCase()
          .includes(search.toUpperCase())
    );
  };

  const searchResult = showFavourites
    ? searchRecipes(favouriteRecipes, search)
    : searchRecipes(recipes, search);

  return <MapRecipes recipes={searchResult} />;
}

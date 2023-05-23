import Card from "./card";
import { useSelector } from "react-redux";

const categories = [
  { id: "breakfast", name: "DESAYUNO" },
  { id: "lunch", name: "ALMUERZO" },
  { id: "tea_hour", name: "HORA DEL TÉ" },
  { id: "dinner", name: "CENA" },
];

export default function listRecipes({ showFavourites, search = "" }) {
  const favouriteRecipes = useSelector((state) => state.recipes.favourites);
  const recipes = useSelector((state) => state.recipes.recipes);
  const re = new RegExp(search, "i");

  if (showFavourites) {
    {
      const searchResults = favouriteRecipes.filter(
        (favourite) =>
          favourite.name.toUpperCase().includes(search.toUpperCase()) ||
          categories
            .find((category) => category.id === favourite.category)
            .name.toUpperCase()
            .includes(search.toUpperCase())
      );
      return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {searchResults.map((recipe) => {
            return (
              <>
                <Card key={recipe.id} recipe={recipe} />
              </>
            );
          })}
        </div>
      );
    }
  } else {
    {
      const searchResults = recipes.filter(
        (recipe) =>
          recipe.name.toUpperCase().includes(search.toUpperCase()) ||
          categories
            .find((category) => category.id === recipe.category)
            .name.toUpperCase()
            .includes(search.toUpperCase())
      );
      return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {searchResults.map((recipe) => {
            return (
              <>
                <Card key={recipe.id} recipe={recipe} />
              </>
            );
          })}
        </div>
      );
    }
  }
}


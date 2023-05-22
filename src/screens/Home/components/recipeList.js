import Card from "./card";
import { useSelector } from "react-redux";
import MapRecipes from "./mapRecipes";
import { useState } from "react";

const categories = [
  { id: "breakfast", name: "DESAYUNO" },
  { id: "lunch", name: "ALMUERZO" },
  { id: "tea_hour", name: "HORA DEL TÉ" },
  { id: "dinner", name: "CENA" },
];

export default function RecipeList({ showFavourites, search = "" }) {
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
      return <MapRecipes recipes={searchResults} />;
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
      return <MapRecipes recipes={searchResults} />;
    }
  }
}

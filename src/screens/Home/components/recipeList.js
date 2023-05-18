import Card from "./card";
import { recetas } from "../data/recetas";
import { useDispatch, useSelector } from "react-redux";

import recipeActions from "@/redux/recipes/actions";

/*
const recetasFavoritas = [
  recetas.at(1),
  recetas.at(5),
  recetas.at(6),
  recetas.at(7),
];*/

export default function RecipeList({ favourite }) {
  const recetasFavoritas = useSelector((state) => state.recipes.favourite);
  const dispatch = useDispatch();

  const addFavourite = (recipe) => dispatch(recipeActions.addFavourite(recipe));

  if (favourite) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {recetasFavoritas.map((recetasFavoritas) => {
          return (
            <>
              <Card
                key={recetasFavoritas.id}
                img={recetasFavoritas.image}
                name={recetasFavoritas.name}
                favourite={true}
              />
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-4 gap-4">
        {recetas.map((recetas) => {
          return (
            <>
              <Card
                key={recetas.id}
                img={recetas.image}
                name={recetas.name}
                favourite={recetas.favourite}
              />
            </>
          );
        })}
      </div>
    );
  }
}

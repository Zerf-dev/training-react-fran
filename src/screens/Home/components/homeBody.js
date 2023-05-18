import SearchBar from "./searchBar";
import RecipeList from "./recipeList";
import { recetas } from "../data/recetas";
import { useState } from "react";

const recetasFavoritas = [
  recetas.at(1),
  recetas.at(5),
  recetas.at(6),
  recetas.at(7),
];

export default function HomeBody() {
  const [verFavoritas, setVerFavoritas] = useState(false);

  return (
    <div className="w-full">
      <SearchBar />
      <div className="w-auto mx-5">
        <div className="flex justify-between my-3">
          <div>
            <button
              className="p-1 m-1 mr-3 border-b-2 border-riquissima"
              onClick={() => {
                setVerFavoritas(false);
              }}
            >
              Todas las recetas ({recetas.length})
            </button>
            <button
              className="p-1 m-1 border-b-2 border-riquissima"
              onClick={() => {
                setVerFavoritas(true);
              }}
            >
              Recetas favoritas ({recetasFavoritas.length})
            </button>
          </div>
          <button className="text-white p-2 bg-riquissima rounded-lg font-bold ">
            + Agregar Receta
          </button>
        </div>
        <RecipeList favourite={verFavoritas} />
      </div>
    </div>
  );
}

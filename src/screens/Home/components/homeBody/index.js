import Search from "@/screens/Home/assets/search.svg";
import Cross from "@/screens/Home/assets/cross.svg";
import ListRecipes from "../listRecipes/index";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import ListButton from "./listButton";
import { ROUTES } from "@/components/constants";

export default function HomeBody() {
  const [showFavourites, setShowFavourites] = useState(false);

  const [selectedButton, setSelectedButton] = useState(0);
  const onSelect = () => {
    setSelectedButton;
  };

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

        {searchValue && (
          <button onClick={() => setSearchValue("")} className="bg-white px-2">
            <Cross />
          </button>
        )}
      </div>
      <div className="w-auto md:mx-5">
        <div className="flex flex-col justify-between my-3 md:flex-row">
          <div className="flex justify-around md:justify-start">
            <ListButton
              isSelected={selectedButton === 0}
              onSelect={() => {
                setShowFavourites(false);
                setSelectedButton(0);
              }}
              content={"Todas las recetas"}
              listLength={recipes.length}
            />
            <ListButton
              isSelected={selectedButton === 1}
              onSelect={() => {
                setShowFavourites(true);
                setSelectedButton(1);
              }}
              content={"Recetas favoritas"}
              listLength={favouriteRecipes.length}
            />
          </div>
          <Link href={ROUTES.NEW_RECIPE}>
            <button className="w-full text-white p-2 bg-riquissima rounded-lg font-bold ">
              + Agregar Receta
            </button>
          </Link>
        </div>
        <ListRecipes showFavourites={showFavourites} search={searchValue} />
      </div>
    </div>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useSelector } from "react-redux";
import Card from "./components/card";

export default function RecipesScreen({ recipeId }) {
  const recipe = useSelector((state) => state.recipes.recipes).find(
    (recipe) => recipe.id === recipeId
  );
  console.log(recipe);
  return (
    <>
      <Header />
      <div className="px-32 py-10 border-y-2">
        <div className="text-xl font-bold text-riquissima">RECETAS / {recipe.category.toUpperCase()}</div>
        <div className="my-5 flex flex-row justify-start bg-backgroundRecipe-contrast rounded-2xl">
          <Card recipeId={recipeId} />
          <div className="flex flex-col w-1/2 ml-10 my-6 space-y-3">
            <div className="text-2xl font-bold">{recipe.name.toUpperCase()}</div>
            <div className="text-xl font-bold">INGREDIENTES</div>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingridient) => {
                return (
                  <li>
                    {ingridient.quantity} {ingridient.unit} de {ingridient.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useSelector } from "react-redux";
import Card from "./components/card";

const categories = [
  { id: "breakfast", name: "DESAYUNO" },
  { id: "lunch", name: "ALMUERZO" },
  { id: "tea_hour", name: "HORA DEL TÉ" },
  { id: "dinner", name: "CENA" },
];

export default function RecipesScreen({ recipeId }) {
  const recipe = useSelector((state) => state.recipes.recipes).find(
    (recipe) => recipe.id === recipeId
  );
  return (
    <>
      <Header />
      <div className="px-7 py-10 border-y-2 md:px-32">
        <div className="text-xl font-bold text-riquissima">
          RECETAS / {categories.find(category => category.id===recipe.category ).name}
        </div>
        <div className="my-5 flex flex-col md:flex-row justify-start bg-backgroundRecipe-contrast rounded-2xl">
          <Card recipeId={recipeId} />
          <div className="flex flex-col mx-3  md:w-1/2 md:ml-10 my-6 space-y-3">
            <div className="text-2xl font-bold">
              {recipe.name.toUpperCase()}
            </div>
            <div className="text-xl font-bold">INGREDIENTES</div>
            <ul className="list-disc ">
              {recipe.ingredients.map((ingridient) => {
                return (
                  <li className="ml-5 font-medium md:font-semibold " key={ingridient.name}>
                    {ingridient.quantity} {ingridient.unit} de {ingridient.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          {recipe.steps.map((step) => {
            return (
              <>
                <div className="text-lg font-bold text-riquissima mt-5">PASO {step.number}</div>
                <p className="my-3 font-medium">{step.description}</p>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

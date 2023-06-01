import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import Card from "@/components/Card/index";
import { useDispatch } from "react-redux";
import recipeActions from "@/redux/recipes/actions";
import { useEffect } from "react";
import LoadingWrapper from "@/components/common/LoadingWrapper";
import { CATEGORIES } from "../../constants/categories";

export default function RecipesScreen({ recipeId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      dispatch(recipeActions.getRecipeById(recipeId));
    }
  }, [recipeId, dispatch]);

  const { recipeById: recipe, recipeByIdLoading: recipeLoading } = useSelector(
    (state) => state.recipes
  );

  return (
    <LoadingWrapper withInitialLoading loading={recipeLoading || !recipeId}>
      <Header />
      <div className="px-7 py-10 border-y-2 md:px-32">
        <div className="text-xl font-semibold text-riquissima">
          RECETAS /
          {
            CATEGORIES.find((category) => category.id === recipe?.category)
              ?.name
          }
        </div>
        <div className="my-5 flex flex-col md:flex-row justify-start bg-backgroundRecipe-contrast rounded-2xl">
          <Card recipe={recipe} fromRecipes={true} />
          <div className="flex flex-col mx-3  md:w-1/2 md:ml-10 my-6">
            <div className="uppercase text-2xl font-black font-archivo">
              {recipe.name}
            </div>
            <div className="text-xl font-semibold mt-6">INGREDIENTES</div>
            <ul className="list-disc space-y-1.5 mt-2">
              {recipe.ingredients?.map((ingredient) => {
                return (
                  <li className="ml-5" key={ingredient.name}>
                    {ingredient.quantity} {ingredient.unit} de {ingredient.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          {recipe.steps?.map((step) => {
            return (
              <>
                <div className="text-lg font-semibold text-riquissima mt-5">
                  PASO {step.number}
                </div>
                <p className="my-3">{step.description}</p>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </LoadingWrapper>
  );
}

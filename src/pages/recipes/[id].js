import RecipesScreen from "@/screens/Recipes";
import { useRouter } from "next/router";

export default function recipes() {
  const router = useRouter();
  const recipeId = router.query.id;
  return (
    <div className="bg-backgroundRecipe font-body">
      <RecipesScreen recipeId={recipeId} />
    </div>
  );
}

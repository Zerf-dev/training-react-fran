import RecipesScreen from "@/screens/Recipes";
import { useRouter } from "next/router";

export default function recipes() {
  const router = useRouter();
  const recipeId = router.query.id;
  return (
    <div className="bg-backgroundRecipe">
      <RecipesScreen recipeId={recipeId} />
    </div>
  );
}

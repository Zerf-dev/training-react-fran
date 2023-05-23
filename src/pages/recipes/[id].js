import RecipesScreen from "@/screens/recipes/recipes";
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

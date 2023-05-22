import DetailsScreen from "@/screens/detail/details";
import { useRouter } from "next/router";

export default function details() {
  const router = useRouter();
  const recipeId = router.query.id;
  return (
    <div className="bg-backgroundRecipe">
      <DetailsScreen recipeId={recipeId} />
    </div>
  );
}

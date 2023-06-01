import Card from "@/components/Card";

export default function RecipesList({ recipes }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {recipes.map((recipe) => {
        return (
          <>
            <Card key={recipe.id} recipe={recipe} />
          </>
        );
      })}
    </div>
  );
}

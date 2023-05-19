import Card from "./card";

export default function MapRecipes({ recipes }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {recipes.map((recipe) => {
        return (
          <>
            <Card key={recipe.id} recipeId={recipe.id} />
          </>
        );
      })}
    </div>
  );
}

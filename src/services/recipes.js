import api from "@/config/api";

const getAllRecipes = () => api.get("/recipes");

const getRecipeById = ({ recipeId }) => api.get(`/recipes/${recipeId}`);

const createRecipe = recipe => api.post("/recipes", recipe);

export default {
  getAllRecipes,
  getRecipeById,
  createRecipe
};

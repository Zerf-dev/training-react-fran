import api from "@/config/api";

const getAllRecipes = () => api.get();

const getRecipeById = ({ recipeId }) => api.get(`/${recipeId}`);

const createRecipe = recipe => api.post(url, recipe);

export default {
  getAllRecipes,
  getRecipeById,
  createRecipe
};

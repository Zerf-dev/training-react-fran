import api from "@/config/api";

const API_URL = "https://backend.training-react.development.zerf.tech/recipes";

const getAllRecipes = () => api.get();

const getRecipeById = ({ recipeId }) => api.get(`/${recipeId}`);

export default {
  getAllRecipes,
  getRecipeById,
};

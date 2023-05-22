import { createTypes, completeTypes } from "redux-recompose";
import recipesService from "@/services/recipes";

export const actions = createTypes(
  completeTypes({
    primaryActions: ["GET_ALL_RECIPES", "GET_RECIPE_BY_ID"],
    ignoredActions: ["ADD_FAVOURITE", "REMOVE_FAVOURITE"],
  }),
  "@@RECIPES"
);

export const actionCreators = {
  addFavourite: (recipe) => (dispatch, getState) => {
    const favourites = getState().recipes.favourites;

    dispatch({
      type: actions.ADD_FAVOURITE,
      target: "favourites",
      payload: [...favourites, recipe],
    });
  },

  removeFavourite: (recipe) => (dispatch, getState) => {
    const favourites = getState().recipes.favourites;

    dispatch({
      type: actions.REMOVE_FAVOURITE,
      target: "favourites",
      payload: favourites.filter((favourite) => favourite.id !== recipe.id),
    });
  },

  getAllRecipes: () => ({
    type: actions.GET_ALL_RECIPES,
    target: "recipes",
    service: recipesService.getAllRecipes,
  }),

  getRecipeById: (recipeId) => ({
    type: actions.GET_RECIPE_BY_ID,
    target: "recipeById",
    service: recipesService.getRecipeById,
    payload: { recipeId },
  }),
};

export default actionCreators;

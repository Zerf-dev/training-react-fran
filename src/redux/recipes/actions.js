import { createTypes, completeTypes } from "redux-recompose";
import recipesService from "@/services/recipes";
import { RECIPE_TARGETS } from "./constants";

export const actions = createTypes(
  completeTypes({
    primaryActions: ["GET_ALL_RECIPES", "GET_RECIPE_BY_ID"],
    ignoredActions: ["HANDLE_FAVOURITE"],
  }),
  "@@RECIPES"
);

export const actionCreators = {
  handleFavourite: (recipe) => (dispatch, getState) => {
    const favourites = getState().recipes.favourites;
    let newFavourites;
    if (favourites.some((favourite) => favourite.id === recipe.id)) {
      newFavourites = favourites.filter(
        (favourite) => favourite.id !== recipe.id
      );
    } else {
      newFavourites = [...favourites, recipe];
    }

    dispatch({
      type: actions.HANDLE_FAVOURITE,
      target: RECIPE_TARGETS.FAVOURITES,
      payload: newFavourites,
    });
  },

  getAllRecipes: () => ({
    type: actions.GET_ALL_RECIPES,
    target: RECIPE_TARGETS.RECIPES,
    service: recipesService.getAllRecipes,
  }),

  getRecipeById: (recipeId) => ({
    type: actions.GET_RECIPE_BY_ID,
    target: RECIPE_TARGETS.RECIPE_BY_ID,
    service: recipesService.getRecipeById,
    payload: { recipeId },
  }),
};

export default actionCreators;

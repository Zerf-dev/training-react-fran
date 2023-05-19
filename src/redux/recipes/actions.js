import { useEffect, useState } from "react";
import { createTypes, completeTypes } from "redux-recompose";
import { getAllRecipies } from "@/services/recipes";

export const actions = createTypes(
  completeTypes({
    primaryActions: [],
    ignoredActions: ["ADD_FAVOURITE", "REMOVE_FAVOURITE", "LOAD_RECIPES"],
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
  fetchRecipes: (recipes) => ({
    type: actions.LOAD_RECIPES,
    target: "recipes",
    payload: recipes,
  }),
};

export default actionCreators;

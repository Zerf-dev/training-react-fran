import { createTypes, completeTypes } from "redux-recompose";

export const actions = createTypes(
  completeTypes({
    primaryActions: [],
    ignoredActions: ["ADD_FAVOURITE", "REMOVE_FAVOURITE"],
  }),
  "@@RECIPES"
);

export const actionCreators = {
  addFavourite:
    ({ recipe }) =>
    (dispatch, getState) => {
      const favourites = getState().recipes.favourite;

      dispatch({
        type: actions.ADD_FAVOURITE,
        target: "favourite",
        payload: [...favourites, recipe],
      });
    },

  removeFavourite:
    ({ recipe }) =>
    (dispatch, getState) => {
      const favourites = getState().recipes.favourite;

      dispatch({
        type: actions.REMOVE_FAVOURITE,
        target: "favourite",
        payload: favourites.filter((favourite) => favourite.id !== recipe.id),
      });
    },
};

export default actionCreators;

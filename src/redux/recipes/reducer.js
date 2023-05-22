import Immutable from "seamless-immutable";
import { completeReducer, createReducer, onReadValue } from "redux-recompose";
import { actions } from "./actions";

const initialState = {
  favourites: [],
  recipes: [],
  recipeById: {}
};

const reducerDescription = {
  primaryActions: [actions.GET_ALL_RECIPES, actions.GET_RECIPE_BY_ID],
  override: {
    [actions.ADD_FAVOURITE]: onReadValue(),
    [actions.REMOVE_FAVOURITE]: onReadValue(),
  },
};

const reducer = createReducer(
  new Immutable(initialState),
  completeReducer(reducerDescription)
);

export default reducer;

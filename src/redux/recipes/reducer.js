import Immutable from "seamless-immutable";
import { createReducer, onReadValue } from "redux-recompose";
import { actions } from "./actions";

const initialState = {
  favourites: [],
  recipes: [],
  recipeById: {},
};

const reducerDescription = {
  primaryActions: [actions.GET_ALL_RECIPIES, actions.GET_RECIPE_BY_ID],
  override: {
    [actions.ADD_FAVOURITE]: onReadValue(),
    [actions.REMOVE_FAVOURITE]: onReadValue(),
    [actions.LOAD_RECIPES]: onReadValue(),
  },
};

const reducer = createReducer(new Immutable(initialState), reducerDescription);

export default reducer;

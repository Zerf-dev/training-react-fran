import Immutable from "seamless-immutable";
import { createReducer, onReadValue } from "redux-recompose";
import { recetas } from "@/assets/recetas";

import { actions } from "./actions";

const initialState = {
  favourites: [],
  recipes: [],
};

const reducerDescription = {
  [actions.ADD_FAVOURITE]: onReadValue(),
  [actions.REMOVE_FAVOURITE]: onReadValue(),
  [actions.LOAD_RECIPES]: onReadValue(),
};

const reducer = createReducer(new Immutable(initialState), reducerDescription);

export default reducer;

import Immutable from "seamless-immutable";
import { completeReducer, createReducer, onReadValue } from "redux-recompose";
import { actions } from "./actions";
import { RECIPE_TARGETS } from "./constants";

const initialState = {
  [RECIPE_TARGETS.RECIPES]: [],
  [RECIPE_TARGETS.FAVOURITES]: [],
  [RECIPE_TARGETS.RECIPE_BY_ID]: {},
};

const reducerDescription = {
  primaryActions: [actions.GET_ALL_RECIPES, actions.GET_RECIPE_BY_ID],
  override: {
    [actions.HANDLE_FAVOURITE]: onReadValue(),
  },
};

const reducer = createReducer(
  new Immutable(initialState),
  completeReducer(reducerDescription)
);

export default reducer;

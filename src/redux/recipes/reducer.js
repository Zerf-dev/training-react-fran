import Immutable from "seamless-immutable";
import { createReducer, onReadValue } from "redux-recompose";

import { actions } from "./actions";

const initialState = {
  favourite: [],
};

const reducerDescription = {
  [actions.ADD_FAVOURITE]: onReadValue(),
  [actions.REMOVE_FAVOURITE]: onReadValue(),
};

const reducer = createReducer(new Immutable(initialState), reducerDescription);

export default reducer;

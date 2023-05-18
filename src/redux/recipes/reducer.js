import Immutable from "seamless-immutable";
import { createReducer, onReadValue } from "redux-recompose";

import { actions } from "./actions";

const reducerDescription = {
  [actions.ADD_FAVOURITE]: onReadValue(),
  [actions.REMOVE_FAVOURITE]: onReadValue(),
};

const reducer = createReducer(new Immutable({}), reducerDescription);

export default reducer;

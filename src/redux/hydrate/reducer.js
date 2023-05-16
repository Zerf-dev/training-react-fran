import { HYDRATE } from 'next-redux-wrapper';

export default function hydrateReducer (state = {}, action) {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};

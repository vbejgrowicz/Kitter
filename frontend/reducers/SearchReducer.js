import { UPDATE_SEARCH } from '../actions/types';

const initialState = {
  value: null,
  results: [],
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        value: action.value,
        results: action.results,
      };
    default:
      return state;
  }
}

export default SearchReducer;

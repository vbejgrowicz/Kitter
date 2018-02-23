import { UPDATE_SEARCH } from '../actions/types';

const initialState = {
  keyword: null,
  results: [],
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        keyword: action.keyword,
        results: action.results,
      };
    default:
      return state;
  }
}

export default SearchReducer;

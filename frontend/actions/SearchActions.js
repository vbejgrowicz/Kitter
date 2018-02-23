import { searchFor } from '../utils/apiUtils';

function searchAll(string) {
  return function searchAllThunk(dispatch) {
    if (string.trim() !== '') {
      searchFor(string).then((response) => {
        const { results } = response;
        dispatch({ type: 'UPDATE_SEARCH', results, keyword: string });
      });
    } else {
      dispatch({ type: 'UPDATE_SEARCH', results: [], keyword: string });
    }
  };
}

module.exports = searchAll;

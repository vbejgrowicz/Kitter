import { searchUsersFor } from '../utils/apiUtils';

function findAllUsers(string) {
  return function findAllUsersThunk(dispatch) {
    if (string.trim() !== '') {
      searchUsersFor(string).then((response) => {
        dispatch({ type: 'UPDATE_SEARCH', results: response.users, value: string });
      });
    } else {
      dispatch({ type: 'UPDATE_SEARCH', results: [], value: string });
    }
  };
}

module.exports = findAllUsers;

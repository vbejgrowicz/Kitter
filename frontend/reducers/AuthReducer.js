import { SET_USER, SET_ERROR } from '../actions/types';

const initialState = {
  username: null,
  name: null,
  id: null,
  error: {
    message: null,
    page: null
  },
}

export function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state,
        {
          username: action.user.username,
          name: action.user.name,
          id: action.user.id
        });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: {
          message: action.message,
          page: action.page
        }
      });
    default :
    return state;
  }
}

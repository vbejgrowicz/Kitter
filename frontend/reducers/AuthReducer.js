import { SET_AUTH_USER, AUTH_FAIL, SET_ERROR, REMOVE_ERROR } from '../actions/types';

const initialState = {
  user: {
    id: null,
    username: null,
    name: null,
    isLoading: true
  },
  error: {
    message: null,
    page: null
  },
}

export function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              id: action.user.id,
              username: action.user.username,
              name: action.user.name,
              isLoading: false,
            })
        }
      );
    case AUTH_FAIL:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              isLoading: false,
            })
        }
      );
    case SET_ERROR:
      return Object.assign({}, state, {
        error: {
          message: action.message,
          page: action.page
        }
      });
    case REMOVE_ERROR:
      return Object.assign({}, state, {
        error: {
          message: null,
          page: null
        }
      });
    default :
    return state;
  }
}

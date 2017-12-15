import { GET_USER_PROFILE, SET_USER_PROFILE, SET_USER_ERROR, SET_POST_COUNT } from '../actions/types';

const initialState = {
  id: null,
  username: null,
  name: null,
  isLoading: false,
  error: false,
  data: {
    posts: null,
    followers: null,
  }
}

export function UserReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return Object.assign({}, state,
        {
          id: action.user.id,
          username: action.user.username,
          name: action.user.name,
          isLoading: false,
          error: false
        }
      );
    case SET_USER_ERROR:
      return Object.assign({}, state,
        {
          isLoading: false,
          error: action.error
        }
      );
    case GET_USER_PROFILE:
      return Object.assign({}, state,
        {
          id: null,
          username: null,
          name: null,
          isLoading: true,
          error: false
        }
      );
    default :
    return state;
  }
}

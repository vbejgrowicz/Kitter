import { GET_USER_PROFILE, SET_USER_DATA, SET_USER_ERROR, SET_POST_COUNT, USER_PROFILE_UPDATED } from '../actions/types';

const initialState = {
  id: null,
  username: null,
  name: null,
  isLoading: false,
  error: false,
  data: {
    posts: 0,
    followers: 0,
  }
}

export function UserReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state,
        {
          id: action.user.id,
          username: action.user.username,
          name: action.user.name,
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
          isLoading: true,
          error: false
        }
      );
    case USER_PROFILE_UPDATED:
      return Object.assign({}, state,
        {
          isLoading: false,
          error: false
        }
      );
    case SET_POST_COUNT:
      return Object.assign({}, state,
        {
          data: Object.assign({}, state.data,
            {
              posts: action.count,
            })
        }
      );
    default :
    return state;
  }
}

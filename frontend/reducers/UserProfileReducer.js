import { GET_USER_PROFILE, SET_USER_PROFILE, SET_USER_ERROR, SET_PROFILE_POSTS } from '../actions/types';

const initialState = {
  user: {
    id: null,
    username: null,
    name: null,
    isLoading: false,
    error: false
  },
  posts: {
    list: [],
    isLoading: false
  }
}

export function UserProfileReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              id: action.user._id,
              username: action.user.username,
              name: action.user.name,
              isLoading: false,
              error: false
            })
        }
      );
    case SET_USER_ERROR:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              isLoading: false,
              error: action.error
            })
        }
      );
    case GET_USER_PROFILE:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              id: null,
              username: null,
              name: null,
              isLoading: true,
              error: false
            })
        }
      );
    case SET_PROFILE_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              list: action.posts,
              isLoading: false
            })
        }
      );
    default :
    return state;
  }
}

import { GET_USER_PROFILE, SET_USER_PROFILE, SET_PROFILE_POSTS } from '../actions/types';

const initialState = {
  user: {
    id: null,
    username: null,
    name: null,
    isLoading: false
  },
  posts: {
    posts: [],
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
              isLoading: false
            })
        }
      );
    case GET_USER_PROFILE:
      return Object.assign({}, state,
        {
          user: Object.assign({}, state.user,
            {
              isLoading: true
            })
        }
      );
    case SET_PROFILE_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              posts: action.posts,
              isLoading: false
            })
        }
      );
    default :
    return state;
  }
}

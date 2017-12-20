import {
  GET_USER_PROFILE,
  SET_USER_PROFILE,
  SET_USER_ERROR,
  SET_POST_COUNT,
} from '../actions/types';

const initialState = {
  id: null,
  username: null,
  name: null,
  isLoading: false,
  error: false,
  data: {
    posts: 0,
    followers: 0,
    following: 0,
  },
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        id: action.user.id,
        username: action.user.username,
        name: action.user.name,
        error: false,
        isLoading: false,
        data: {
          ...state.data,
          posts: action.postCount,
          followers: action.followerCount,
          following: action.followingCount,
        },
      };
    case SET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case SET_POST_COUNT:
      return {
        ...state,
        data: {
          ...state.data,
          posts: action.count,
        },
      };
    default:
      return state;
  }
}

export default UserReducer;

import {
  GET_USER_PROFILE,
  SET_USER_PROFILE,
  SET_USER_ERROR,
  SET_POST_COUNT,
  GET_FOLLOWS,
  SET_FOLLOWS,
  UPDATE_FOLLOW_DATA,
} from '../actions/types';

const initialState = {
  id: null,
  username: null,
  name: null,
  isLoading: false,
  error: false,
  data: {
    posts: 0,
    follows: {
      followers: 0,
      following: 0,
      list: [],
      isLoading: false,
    },
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
          follows: {
            ...state.data.follows,
            followers: action.followerCount,
            following: action.followingCount,
          },
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
    case GET_FOLLOWS:
      return {
        ...state,
        data: {
          ...state.data,
          follows: {
            ...state.data.follows,
            list: [],
            isLoading: true,
          },
        },
      };
    case SET_FOLLOWS:
      return {
        ...state,
        data: {
          ...state.data,
          follows: {
            ...state.data.follows,
            list: action.followList,
            isLoading: false,
          },
        },
      };
    case UPDATE_FOLLOW_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          follows: {
            ...state.data.follows,
            followers: action.followerCount,
            following: action.followingCount,
          },
        },
      };
    default:
      return state;
  }
}

export default UserReducer;

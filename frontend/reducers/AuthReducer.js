import {
  SET_AUTH_USER,
  AUTH_FAIL,
  SET_ERROR,
  REMOVE_ERROR,
  FOLLOW_USER,
  UNFOLLOW_USER,
  ADD_USER_IMAGE,
} from '../actions/types';

const initialState = {
  user: {
    id: null,
    username: null,
    name: null,
    image: null,
    isLoading: true,
    following: {
      list: [],
    },
  },
  error: {
    message: null,
    page: null,
  },
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.user.id,
          username: action.user.username,
          name: action.user.name,
          image: action.user.image,
          isLoading: false,
          following: {
            ...state.user.following,
            list: action.following,
          },
        },
      };
    case AUTH_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          message: action.message,
          page: action.page,
        },
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: {
          message: null,
          page: null,
        },
      };
    case FOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user,
          following: {
            ...state.user.following,
            list: [action.user, ...state.user.following.list],
          },
        },
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user,
          following: {
            ...state.user.following,
            list: state.user.following.list.filter(user => user._id !== action.user.id),
          },
        },
      };
    case ADD_USER_IMAGE:
      return {
        ...state,
        user: {
          ...state.user,
          image: action.image,
        },
      };
    default:
      return state;
  }
}

export default AuthReducer;

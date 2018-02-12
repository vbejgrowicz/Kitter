import {
  SET_AUTH_USER,
  SET_AUTH_DEFAULT,
  SET_LOGGING_OUT,
  SET_ERROR,
  REMOVE_ERROR,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_AUTH_USER_IMAGE,
} from '../actions/types';

const initialState = {
  user: {
    _id: null,
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
          _id: action.user._id,
          username: action.user.username,
          name: action.user.name,
          image: action.user.image,
          isLoading: false,
          following: {
            ...state.user.following,
            list: action.following,
          },
        },
        error: {
          message: null,
          page: null,
        },
      };
    case SET_AUTH_DEFAULT:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          _id: null,
          username: null,
          name: null,
          image: null,
          following: {
            ...state.user.following,
            list: [],
          },
        },
      };
    case SET_LOGGING_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
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
            list: state.user.following.list.filter(user => user._id !== action.user._id),
          },
        },
      };
    case SET_AUTH_USER_IMAGE:
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

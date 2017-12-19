import {
  SET_AUTH_USER,
  AUTH_FAIL,
  SET_ERROR,
  REMOVE_ERROR,
  FOLLOW_USER,
} from '../actions/types';

const initialState = {
  user: {
    id: null,
    username: null,
    name: null,
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
          isLoading: false,
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
    default:
      return state;
  }
}

export default AuthReducer;

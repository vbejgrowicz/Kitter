import { findUser, getNumPosts } from '../utils/apiUtils';

export function checkUser(username) {
  return function checkUserThunk(dispatch) {
    dispatch({type: 'GET_USER_PROFILE'});
    findUser(username).then(user => {
      if (user.id) {
        dispatch(findUserPostCount(user));
        dispatch({type: 'SET_USER_PROFILE', user: user });
      } else {
        dispatch({type: 'SET_USER_ERROR', error: true });
      }
    });
  }
};

export const setUser = user => {
  return {
    type: 'SET_USER_PROFILE',
    user
  };
};

export function findUserPostCount(user) {
  return function findUserPostCountThunk(dispatch) {
    const id = user.id;
    getNumPosts(id).then(response => {
      dispatch({type: 'SET_POST_COUNT', count: response.count});
    });
  }
};

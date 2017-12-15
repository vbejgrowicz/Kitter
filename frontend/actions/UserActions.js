import { findUser, getNumPosts } from '../utils/apiUtils';

export function checkUser(username) {
  return function checkUserThunk(dispatch) {
    dispatch({type: 'GET_USER_PROFILE'});
    findUser(username).then(user => {
      if (user.id) {
        dispatch(setUser(user));
      } else {
        dispatch({type: 'SET_USER_ERROR', error: true });
      }
    });
  }
};

export function getAuthUser(user) {
  return function getAuthUserThunk(dispatch) {
    dispatch({type: 'GET_USER_PROFILE'});
    dispatch(setUser(user));
  }
};

export function setUser(user) {
  return function setUserThunk(dispatch) {
    dispatch({type: 'SET_USER_DATA', user: user});
    dispatch(findUserPostCount(user)).then(() => {
      dispatch({type: 'USER_PROFILE_UPDATED'});
    });
  }
};

export function findUserPostCount(user) {
  return function findUserPostCountThunk(dispatch) {
    const id = user.id;
    return getNumPosts(id).then(response => {
      dispatch({type: 'SET_POST_COUNT', count: response.count});
    });
  }
};

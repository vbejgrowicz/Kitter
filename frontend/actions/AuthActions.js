import { checkUser, logIn, signUp, logOut, follow, unfollow } from '../utils/apiUtils';

export function getUser() {
  return function getUserThunk(dispatch) {
    checkUser().then((response) => {
      if (response.id !== null) {
        dispatch({ type: 'SET_AUTH_USER', user: response });
      } else {
        dispatch({ type: 'AUTH_FAIL' });
      }
    });
  };
}

export function logInUser(username, password, redirectFailure) {
  return function logInUserThunk(dispatch) {
    const userData = { username, password };
    logIn(userData).then((response) => {
      if (response.username) {
        dispatch({ type: 'SET_AUTH_USER', user: response });
      } else {
        redirectFailure();
        dispatch({ type: 'SET_ERROR', page: '/login', message: response });
      }
    });
  };
}

export function signUpUser(name, username, password) {
  return function signUpUserThunk(dispatch) {
    const userData = { name, username, password };
    signUp(userData).then((response) => {
      if (response.username) {
        dispatch({ type: 'SET_AUTH_USER', user: response });
      } else {
        dispatch({ type: 'SET_ERROR', page: '/signup', message: response.message });
      }
    });
  };
}

export function logOutUser() {
  return function logOutUserThunk(dispatch) {
    logOut().then((response) => {
      dispatch({ type: 'SET_AUTH_USER', user: response });
    });
  };
}

export const clearError = () => (
  { type: 'REMOVE_ERROR' }
);

export function followUser(user) {
  return function followUserThunk(dispatch) {
    follow(user).then((response) => {
      const followedUser = response.follow.following;
      dispatch({ type: 'FOLLOW_USER', user: followedUser });
    });
  };
}

export function unfollowUser(user) {
  return function unfollowUserThunk(dispatch) {
    unfollow(user).then(() => {
      dispatch({ type: 'UNFOLLOW_USER', user });
    });
  };
}

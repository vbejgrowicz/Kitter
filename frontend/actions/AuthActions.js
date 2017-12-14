import { checkUser, logIn, signUp, logOut } from '../utils/apiUtils';

export function getUser() {
  return function getUserThunk(dispatch) {
    checkUser().then(response => {
      if (response.id !== null) {
        dispatch({type: 'SET_AUTH_USER', user: response});
      } else {
        dispatch({type: 'AUTH_FAIL'});
      }
    });
  };
};

export function logInUser(username, password, redirectFailure) {
  return function logInUserThunk(dispatch) {
    const userData = { username: username, password: password };
    logIn(userData).then(response => {
      if (response.username) {
        dispatch({type: 'SET_AUTH_USER', user: response});
      } else {
        redirectFailure();
        dispatch({type: 'SET_ERROR', page: '/login', message: response});
      }
    });
  };
};

export function signUpUser(name, username, password) {
  return function signUpUserThunk(dispatch) {
    const userData = { name: name, username: username, password: password };
    signUp(userData).then(response => {
      if (response.username) {
        dispatch({type: 'SET_AUTH_USER', user: response});
      } else {
        dispatch({type: 'SET_ERROR', page: '/signup',  message: response.message});
      }
    });
  };
};

export function logOutUser() {
  return function logOutUserThunk(dispatch) {
    logOut().then(response => {
      dispatch({type: 'SET_AUTH_USER', user: response});
    });
  };
};

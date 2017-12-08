import { checkUser, logIn, signUp, logOut } from '../utils/apiUtils';
import { isLoading } from './ViewActions';

export function getUser() {
  return function getUserThunk(dispatch) {
    checkUser().then(response => {
      dispatch({type: 'SET_USER', user: response});
    });
    dispatch(isLoading(false));
  };
};

export function logInUser(username, password) {
  return function logInUserThunk(dispatch) {
    const userData = { username: username, password: password };
    logIn(userData).then(response => {
      if (response.username) {
        dispatch({type: 'SET_USER', user: response});
      } else {
        console.log(response);
      }
    });
  };
};

export function signUpUser(name, username, password) {
  return function signUpUserThunk(dispatch) {
    const userData = { name: name, username: username, password: password };
    signUp(userData).then(response => {
      if (response.username) {
        dispatch({type: 'SET_USER', user: response});
      } else {
        console.log(response);
      }
    });
  };
};

export function logOutUser() {
  return function logOutUserThunk(dispatch) {
    logOut().then(response => {
      dispatch({type: 'SET_USER', user: response});
    });
  };
};

import { checkUser, logIn, signUp, logOut, follow, unfollow, getFollowing, addProfileImage } from '../utils/apiUtils';

export function getUser() {
  return function getUserThunk(dispatch) {
    checkUser().then((response) => {
      const { user } = response;
      if (user !== null) {
        getFollowing(user._id).then((res) => {
          dispatch({ type: 'SET_AUTH_USER', user, following: res.list });
        });
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
      const { user } = response;
      if (user) {
        getFollowing(user._id).then((res) => {
          dispatch({ type: 'SET_AUTH_USER', user, following: res.list });
        });
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
      const { user, message } = response;
      if (user.username) {
        dispatch({ type: 'SET_AUTH_USER', user, following: [] });
      } else {
        dispatch({ type: 'SET_ERROR', page: '/signup', message });
      }
    });
  };
}

export function logOutUser() {
  return function logOutUserThunk(dispatch) {
    logOut().then((response) => {
      const { user } = response;
      dispatch({ type: 'SET_AUTH_USER', user, following: [] });
    });
  };
}

export const clearError = () => (
  { type: 'REMOVE_ERROR' }
);

export function followUser(user) {
  return function followUserThunk(dispatch) {
    follow(user).then((response) => {
      if (response.follow) {
        const followedUser = response.follow.following;
        dispatch({ type: 'FOLLOW_USER', user: followedUser });
      } else {
        // Handle Req Log In
      }
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

export function addUserImage(image, user) {
  return function addUserImageThunk(dispatch) {
    addProfileImage(image).then((response) => {
      dispatch({ type: 'ADD_AUTH_USER_IMAGE', image: response.image });
      dispatch({ type: 'SET_USER_IMAGE', image: response.image, user });
    });
  };
}

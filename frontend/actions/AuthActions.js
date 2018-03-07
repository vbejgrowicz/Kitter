import { getSessionUser, logIn, signUp, logOut, follow, unfollow, addProfileImage, removeProfileImage, getUserFollows } from '../utils/apiUtils';

export function getUser() {
  return function getUserThunk(dispatch) {
    getSessionUser().then((response) => {
      const { user } = response;
      if (user) {
        getUserFollows(user._id, 'following').then((res) => {
          dispatch({ type: 'SET_AUTH_USER', user, following: res.list });
        });
      } else {
        dispatch({ type: 'SET_AUTH_DEFAULT' });
      }
    });
  };
}

export function logInUser(username, password, redirectFailure) {
  return function logInUserThunk(dispatch) {
    const userData = { username, password };
    logIn(userData).then((response) => {
      const { user, message } = response;
      if (user) {
        getUserFollows(user._id, 'following').then((res) => {
          dispatch({ type: 'SET_AUTH_USER', user, following: res.list });
        });
      } else {
        redirectFailure();
        dispatch({ type: 'SET_ERROR', page: '/login', message });
      }
    });
  };
}

export function signUpUser(name, username, password) {
  return function signUpUserThunk(dispatch) {
    const userData = { name, username, password };
    signUp(userData).then((response) => {
      const { user, message } = response;
      if (user) {
        dispatch({ type: 'SET_AUTH_USER', user, following: [] });
      } else {
        dispatch({ type: 'SET_ERROR', page: '/signup', message });
      }
    });
  };
}

export function logOutUser(route) {
  return function logOutUserThunk(dispatch) {
    logOut().then(() => {
      dispatch({ type: 'SET_LOGGING_OUT', isLoading: true });
      route();
      dispatch({ type: 'SET_AUTH_DEFAULT' });
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

function updateImage(image) {
  if (image === undefined) {
    return removeProfileImage();
  }
  return addProfileImage(image);
}

export function updateUserImage(user, image) {
  return function updateUserImageThunk(dispatch) {
    updateImage(image).then((response) => {
      dispatch({ type: 'SET_AUTH_USER_IMAGE', image: response.image });
      dispatch({ type: 'SET_USER_IMAGE', image: response.image, user });
    });
  };
}

import { findUser, getNumPosts, getFollowerCount, getFollowingCount } from '../utils/apiUtils';

export function updateUserPostCount(user) {
  return function updateUserPostCountThunk(dispatch) {
    const { id } = user;
    return getNumPosts(id).then((response) => {
      dispatch({ type: 'SET_POST_COUNT', count: response.count });
    });
  };
}

function setUserData(user) {
  return function setUserDataThunk(dispatch) {
    getNumPosts(user.id).then((postRes) => {
      getFollowerCount(user.id).then((followerRes) => {
        getFollowingCount(user.id).then((followingRes) => {
          dispatch({
            type: 'SET_USER_PROFILE',
            user,
            postCount: postRes.count,
            followerCount: followerRes.count,
            followingCount: followingRes.count,
          });
        });
      });
    });
  };
}

export function getAuthUser(user) {
  return function getAuthUserThunk(dispatch) {
    dispatch({ type: 'GET_USER_PROFILE' });
    dispatch(setUserData(user));
  };
}

export function getUser(username) {
  return function getUserThunk(dispatch) {
    dispatch({ type: 'GET_USER_PROFILE' });
    findUser(username).then((userRes) => {
      if (userRes.id) {
        dispatch(setUserData(userRes));
      } else {
        dispatch({ type: 'SET_USER_ERROR', error: true });
      }
    });
  };
}

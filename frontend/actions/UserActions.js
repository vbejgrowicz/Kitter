import { findUser, getNumPosts, getFollowerCount, getFollowingCount, getFollowers, getFollowing } from '../utils/apiUtils';

export function updateUserPostCount(id) {
  return function updateUserPostCountThunk(dispatch) {
    return getNumPosts(id).then((response) => {
      dispatch({ type: 'SET_POST_COUNT', count: response.count });
    });
  };
}

function setUserData(user) {
  return function setUserDataThunk(dispatch) {
    getNumPosts(user._id).then((postRes) => {
      getFollowerCount(user._id).then((followerRes) => {
        getFollowingCount(user._id).then((followingRes) => {
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
    findUser(username).then((response) => {
      const { user } = response;
      if (user !== null) {
        dispatch(setUserData(user));
      } else {
        dispatch({ type: 'SET_USER_ERROR', error: true });
      }
    });
  };
}

function getUserList(category, id) {
  if (category === 'followers') {
    return getFollowers(id);
  }
  return getFollowing(id);
}

export function getFollows(category, id) {
  return function getFollowsThunk(dispatch) {
    dispatch({ type: 'GET_FOLLOWS' });
    getUserList(category, id).then((response) => {
      dispatch({ type: 'SET_FOLLOWS', followList: response.list });
    });
  };
}

export function updateFollowCount(id) {
  return function updateFollowCountThunk(dispatch) {
    return getFollowerCount(id).then((followerRes) => {
      getFollowingCount(id).then((followingRes) => {
        dispatch({
          type: 'UPDATE_FOLLOW_DATA',
          followerCount: followerRes.count,
          followingCount: followingRes.count,
        });
      });
    });
  };
}

import { findUser, getNumPosts, getUserFollows, getNumFollows } from '../utils/apiUtils';

export function updateUserPostCount(id) {
  return function updateUserPostCountThunk(dispatch) {
    return getNumPosts('user', id).then((response) => {
      dispatch({ type: 'SET_POST_COUNT', count: response.count });
    });
  };
}

function setUserData(user) {
  return function setUserDataThunk(dispatch) {
    getNumPosts('user', user._id).then((postRes) => {
      getNumFollows(user._id, 'followers').then((followerRes) => {
        getNumFollows(user._id, 'following').then((followingRes) => {
          debugger;
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
      if (user) {
        dispatch(setUserData(user));
      } else {
        dispatch({ type: 'SET_USER_ERROR', error: true });
      }
    });
  };
}


export function getFollows(category, id) {
  return function getFollowsThunk(dispatch) {
    dispatch({ type: 'GET_FOLLOWS' });
    getUserFollows(id, category).then((response) => {
      dispatch({ type: 'SET_FOLLOWS', followList: response.list });
    });
  };
}

export function updateFollowCount(id) {
  return function updateFollowCountThunk(dispatch) {
    return getNumFollows(id, 'followers').then((followerRes) => {
      getNumFollows(id, 'following').then((followingRes) => {
        dispatch({
          type: 'UPDATE_FOLLOW_DATA',
          followerCount: followerRes.count,
          followingCount: followingRes.count,
        });
      });
    });
  };
}

export function updateCount(id) {
  return function updateCountThunk(dispatch) {
    dispatch(updateFollowCount(id));
    dispatch(updateUserPostCount(id));
  };
}

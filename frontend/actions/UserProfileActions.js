import { findUser, getUserPosts } from '../utils/apiUtils';

export function checkUser(username) {
  return function checkUser(dispatch) {
    dispatch({type: 'GET_USER_PROFILE'});
    findUser(username).then(response => {
      if (response.user) {
        dispatch({type: 'SET_USER_PROFILE', user: response.user })
      } else {
        dispatch({type: 'SET_USER_ERROR', error: true })
      }
    });
  }
}

export function findPosts(id) {
  return function findPosts(dispatch) {
    getUserPosts(id).then(response => {
      console.log(response);
      dispatch({type: 'SET_PROFILE_POSTS', posts: response.userPosts});
    });
  }
};

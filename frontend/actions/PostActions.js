import { getAllPosts, findUser, getUserPosts, addPost } from '../utils/apiUtils';

export function getPosts() {
  return function getPostsThunk(dispatch) {
    dispatch(requestPosts());
    getAllPosts().then(response => {
      let err = false;
      dispatch({type: 'FETCH_POSTS', posts: response.allPosts});
      dispatch(receivedPosts(err));
    });
  };
};

export function getCurrentPosts(username) {
  return function getCurrentPostsThunk(dispatch) {
    getUserPosts(username).then(response => {
      dispatch({type: 'FETCH_POSTS', posts: response.userPosts});
    });
  };
};

export function newPost(post) {
  return function newPostThunk(dispatch) {
    addPost(post).then(response => {
      dispatch({type: 'ADD_POST', post: response.post});
    });
  };
};

export const requestPosts = () => {
  return {
    type: 'FETCH_POST_STATUS',
    errorStatus: false,
    fetchStatus: true
  };
};

export const receivedPosts = (err) => {
  return {
    type: 'FETCH_POST_STATUS',
    errorStatus: err,
    fetchStatus: false
  };
};

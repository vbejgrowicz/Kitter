import { getAllPosts, getUserPosts, addPost } from '../utils/apiUtils';

export function getPosts() {
  return function getPostsThunk(dispatch) {
    getAllPosts().then(response => {
      dispatch({type: 'FETCH_POSTS', posts: response.allPosts});
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

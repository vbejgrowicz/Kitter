import { getAllPosts, getUserPosts, addPost, removePost } from '../utils/apiUtils';

export function findAllPosts(id) {
  return function findAllPostsThunk(dispatch) {
    dispatch({type: 'GET_POSTS'});
    getAllPosts().then(response => {
      dispatch({type: 'SET_POSTS', posts: response.allPosts});
    });
  };
};

export function findUserPosts(id) {
  return function findUserPostsThunk(dispatch) {
    dispatch({type: 'GET_POSTS'});
    getUserPosts(id).then(response => {
      dispatch({type: 'SET_POSTS', posts: response.userPosts});
    });
  }
};

export function newPost(post) {
  return function newPostThunk(dispatch) {
    addPost(post).then(response => {
      dispatch({type: 'ADD_POST', post: response.post});
    });
  };
};

export function deletePost(id) {
  return function deletePostThunk(dispatch) {
    removePost(id).then(response => {
      dispatch({type: 'REMOVE_POST', id: id});
    });
  };
};

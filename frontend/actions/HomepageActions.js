import { getAllPosts, addPost } from '../utils/apiUtils';

export function findAllPosts(id) {
  return function findAllPosts(dispatch) {
    dispatch({type: 'GET_HOMEPAGE_POSTS'});
    getAllPosts().then(response => {
      dispatch({type: 'SET_HOMEPAGE_POSTS', posts: response.allPosts});
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
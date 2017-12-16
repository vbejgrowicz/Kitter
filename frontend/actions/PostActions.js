import { getAllPosts, getUserPosts, addPost, removePost } from '../utils/apiUtils';

export function fetchPosts(id, category) {
  return function fetchPostsThunk(dispatch) {
    dispatch({type: 'GET_POSTS', category: category});
    if (category === 'User') {
      dispatch(findUserPosts(id));
    } else {
      dispatch(findAllPosts(id));
    }
  };
};
export function findAllPosts(id) {
  return function findAllPostsThunk(dispatch) {
    getAllPosts().then(response => {
      dispatch({type: 'SET_POSTS', posts: response.allPosts});
    });
  };
};

export function findUserPosts(id) {
  return function findUserPostsThunk(dispatch) {
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

export const setPendingPosts = (status, count) => {
  return {
    type: 'UPDATE_PENDING_POSTS',
    status,
    count
  }
}

import { getAllPosts, getUserPosts, addPost, removePost, getNumPosts, getTotalNumPosts } from '../utils/apiUtils';
import { findUserPostCount } from './UserActions';

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
      getTotalNumPosts().then(res => {
        dispatch({type: 'SET_POSTS', posts: response.allPosts, total: res.count});
      });
    });
  };
};

export function findUserPosts(id) {
  return function findUserPostsThunk(dispatch) {
    getUserPosts(id).then(response => {
      getNumPosts(id).then(res => {
        dispatch({type: 'SET_POSTS', posts: response.userPosts, total: res.count});
      })
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

export function deletePost(post) {
  return function deletePostThunk(dispatch) {
    const postID = post._id;
    removePost(postID).then(response => {
      dispatch({type: 'REMOVE_POST', id: postID});
      dispatch(findUserPostCount(post.author));
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

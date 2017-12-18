import { getAllPosts, getUserPosts, addPost, removePost, getNumPosts, getTotalNumPosts, getNewPosts } from '../utils/apiUtils';
import { findUserPostCount } from './UserActions';

export function findAllPosts(id) {
  return function findAllPostsThunk(dispatch) {
    getAllPosts().then((response) => {
      getTotalNumPosts().then((res) => {
        dispatch({ type: 'SET_POSTS', posts: response.allPosts, total: res.count });
      });
    });
  };
}

export function findUserPosts(id) {
  return function findUserPostsThunk(dispatch) {
    getUserPosts(id).then((response) => {
      getNumPosts(id).then((res) => {
        dispatch({ type: 'SET_POSTS', posts: response.userPosts, total: res.count });
      });
    });
  };
}

export function fetchPosts(id, category) {
  return function fetchPostsThunk(dispatch) {
    dispatch({ type: 'GET_POSTS', category });
    if (category === 'User') {
      dispatch(findUserPosts(id));
    } else {
      dispatch(findAllPosts(id));
    }
  };
}

function resolvePendingPosts(category, userId, currentPostCount) {
  return function resolvePendingPostsThunk(dispatch) {
    return getPostCount(category, userId).then((response) => {
      const newPostCount = response.count - currentPostCount;
      if (newPostCount > 0) {
        return getNewPosts(newPostCount).then((res) => {
          dispatch({ type: 'ADD_NEW_POSTS', count: newPostCount, posts: res.newPosts });
        });
      }
      return null;
    });
  };
}

export function newPost(post, category, user, currentPostCount) {
  return function newPostThunk(dispatch) {
    dispatch(resolvePendingPosts(category, user.id, currentPostCount)).then(() => {
      addPost(post).then((response) => {
        if (category === 'All') {
          dispatch({ type: 'ADD_POST', post: response.post });
          dispatch(findUserPostCount(user));
        }
      });
    });
  };
}

export function deletePost(post) {
  return function deletePostThunk(dispatch) {
    const postID = post._id;
    removePost(postID).then(() => {
      dispatch({ type: 'REMOVE_POST', id: postID });
      dispatch(findUserPostCount(post.author));
    });
  };
}

export function checkPendingPosts(category, userId) {
  return function checkPendingPostsThunk(dispatch, getState) {
    const { total } = getState().PostReducer.posts;
    getPostCount(category, userId).then((response) => {
      const newPostCount = response.count - total;
      if (newPostCount > 0) {
        getNewPosts(newPostCount).then((res) => {
          dispatch({ type: 'SET_PENDING_POSTS', count: newPostCount, posts: res.newPosts });
        });
      }
    });
  };
}

export const addPendingPosts = () => (
  { type: 'ADD_PENDING_POSTS' }
);

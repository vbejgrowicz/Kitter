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

export function setPendingPosts(count, category) {
  return function setPendingPostsThunk(dispatch) {
    if (category === 'All') {
      getNewPosts(count).then((response) => {
        dispatch({ type: 'UPDATE_PENDING_POSTS', status: true, count, posts: response.newPosts });
      });
    }
  };
}

function getPostCount(category, userId) {
  if (category === 'All') {
    return getTotalNumPosts();
  }
  return getNumPosts(userId);
}

export function checkPendingPosts() {
  return function checkPendingPostsThunk(dispatch, getState) {
    const { category, pendingPosts, total } = getState().PostReducer.posts;
    const user = getState().UserReducer;
    getPostCount(category, user.id).then((res) => {
      const newCount = res.count - total;
      if (newCount > 0 && newCount !== pendingPosts.count) {
        dispatch(setPendingPosts(newCount, category));
      }
    });
  };
}

export const addPendingPosts = () => (
  { type: 'ADD_PENDING_POSTS' }
);

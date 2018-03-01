import {
  getFeaturedPosts,
  getUserPosts,
  addPost,
  removePost,
  getNumPosts,
  getTotalNumPosts,
  getNewUserPosts,
  likePost,
  unlikePost,
} from '../utils/apiUtils';
import { updateUserPostCount } from './UserActions';

function getPosts(category, userId, lastPostDate) {
  if (category === 'All') {
    return getUserPosts('all', userId, lastPostDate);
  } else if (category === 'User') {
    return getUserPosts('user', userId, lastPostDate);
  }
  return getFeaturedPosts();
}

function getPostCount(category, userId) {
  if (category === 'All') {
    return getTotalNumPosts();
  }
  return getNumPosts(userId);
}

function getNewPosts(category, userId, count) {
  if (category === 'All') {
    return getNewUserPosts('all', userId, count);
  }
  return getNewUserPosts('user', userId, count);
}

function setPostList(id, category, lastPostDate) {
  return function setPostListThunk(dispatch) {
    const isFirst = lastPostDate === 'first fetch' || lastPostDate === undefined;
    if (id !== undefined) {
      return getPosts(category, id, lastPostDate).then(response => (
        getPostCount(category, id).then((res) => {
          dispatch({
            type: 'SET_POSTS',
            posts: response.posts,
            total: res.count,
            isFirst,
          });
        })
      ));
    }
    return getPosts().then(response => (
      dispatch({
        type: 'SET_POSTS',
        posts: response.posts,
        total: response.posts.length,
        isFirst,
      })
    ));
  };
}

export function fetchPosts(id, category, lastPostDate) {
  return function fetchPostsThunk(dispatch) {
    if (lastPostDate === 'first fetch') {
      dispatch({ type: 'GET_POSTS', category });
    } else if (lastPostDate === undefined) {
      dispatch({ type: 'GET_POSTS', category: 'Featured' });
    } else {
      dispatch({ type: 'LOAD_POSTS' });
    }
    dispatch(setPostList(id, category, lastPostDate));
  };
}

function resolvePendingPosts(category, userId, currentPostCount) {
  return function resolvePendingPostsThunk(dispatch) {
    return getPostCount(category, userId).then((response) => {
      const newPostCount = response.count - currentPostCount;
      if (newPostCount > 0) {
        return getNewPosts(category, userId, newPostCount).then((res) => {
          dispatch({ type: 'ADD_NEW_POSTS', count: newPostCount, posts: res.newPosts });
        });
      }
      return null;
    });
  };
}

export const updateMessage = (status, text) => (
  { type: 'UPDATE_POST_MESSAGE', status, text }
);

export function newPost(post, category, user, currentPostCount) {
  return function newPostThunk(dispatch) {
    dispatch(resolvePendingPosts(category, user._id, currentPostCount)).then(() => {
      addPost(post).then((response) => {
        if (category === 'All') {
          dispatch({ type: 'ADD_POST', post: response.post });
          dispatch(updateUserPostCount(user._id));
        } else {
          dispatch(updateMessage(true, 'Your Meow was sent'));
        }
      });
    });
  };
}

export function deletePost(post) {
  return function deletePostThunk(dispatch) {
    const postID = post._id;
    removePost(postID).then((response) => {
      dispatch({ type: 'REMOVE_POST', id: postID });
      dispatch(updateUserPostCount(post.author._id));
      dispatch(updateMessage(true, response.message));
    });
  };
}

export function checkPendingPosts(category, userId) {
  return function checkPendingPostsThunk(dispatch, getState) {
    const { total } = getState().PostReducer.posts;
    getPostCount(category, userId).then((response) => {
      const newPostCount = response.count - total;
      if (newPostCount > 0) {
        getNewPosts(category, userId, newPostCount).then((res) => {
          dispatch({ type: 'SET_PENDING_POSTS', count: newPostCount, posts: res.newPosts });
        });
      }
    });
  };
}

export const addPendingPosts = () => (
  { type: 'ADD_PENDING_POSTS' }
);

export const emptyPostList = () => (
  { type: 'REMOVE_POST_LIST' }
);

export function updatePost(isLiked, post) {
  return function updatePostThunk(dispatch) {
    const postID = post._id;
    if (isLiked) {
      unlikePost(postID).then((res) => {
        dispatch({ type: 'UNLIKE_POST', post, user: res.user });
      });
    } else {
      likePost(postID).then((res) => {
        dispatch({ type: 'LIKE_POST', post, user: res.user });
      });
    }
  };
}

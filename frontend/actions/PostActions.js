import {
  getHomepagePosts,
  getUserPosts,
  addPost,
  removePost,
  getNumPosts,
  getTotalNumPosts,
  getNewHomepagePosts,
  getNewUserPosts,
  likePost,
  unlikePost,
} from '../utils/apiUtils';
import { updateUserPostCount } from './UserActions';

function getPosts(category, userId, shownPostCount) {
  if (category === 'All') {
    return getHomepagePosts(shownPostCount);
  }
  return getUserPosts(userId, shownPostCount);
}

function getPostCount(category, userId) {
  if (category === 'All') {
    return getTotalNumPosts();
  }
  return getNumPosts(userId);
}

function getNewPosts(category, userId, count) {
  if (category === 'All') {
    return getNewHomepagePosts(count);
  }
  return getNewUserPosts(userId, count);
}

export function fetchPosts(id, category, shownPostCount) {
  return function fetchPostsThunk(dispatch) {
    if (shownPostCount === undefined) {
      dispatch({ type: 'GET_POSTS', category });
    } else {
      dispatch({ type: 'LOAD_POSTS' });
    }
    return getPosts(category, id, shownPostCount).then(response => (
      getPostCount(category, id).then((res) => {
        dispatch({ type: 'SET_POSTS', posts: response.posts, total: res.count });
      })
    ));
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
    dispatch(resolvePendingPosts(category, user.id, currentPostCount)).then(() => {
      addPost(post).then((response) => {
        if (category === 'All') {
          dispatch({ type: 'ADD_POST', post: response.post });
          dispatch(updateUserPostCount(user.id));
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
    removePost(postID).then(() => {
      dispatch({ type: 'REMOVE_POST', id: postID });
      dispatch(updateUserPostCount(post.author.id));
      dispatch(updateMessage(true, 'Your Meow has been deleted'));
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

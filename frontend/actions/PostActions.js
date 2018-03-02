import {
  fetchFeaturedPosts,
  fetchPosts,
  addPost,
  removePost,
  getNumPosts,
  fetchNewPosts,
  likePost,
  unlikePost,
} from '../utils/apiUtils';
import { updateUserPostCount } from './UserActions';

function getPosts(category, userId, lastPostDate) {
  if (category) {
    return fetchPosts(category, userId, lastPostDate);
  }
  return fetchFeaturedPosts();
}

function setPostList(id, category, lastPostDate) {
  return function setPostListThunk(dispatch) {
    const isFirst = lastPostDate === 'first fetch' || lastPostDate === undefined;
    if (id !== undefined) {
      return getPosts(category, id, lastPostDate).then(response => (
        getNumPosts(category, id).then((res) => {
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
      dispatch({ type: 'GET_POSTS', category: 'featured' });
    } else {
      dispatch({ type: 'LOAD_POSTS' });
    }
    dispatch(setPostList(id, category, lastPostDate));
  };
}

function resolvePendingPosts(category, userId, currentPostCount) {
  return function resolvePendingPostsThunk(dispatch) {
    return getNumPosts(category, userId).then((response) => {
      const newPostCount = response.count - currentPostCount;
      if (newPostCount > 0) {
        return fetchNewPosts(category, userId, newPostCount).then((res) => {
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
      addPost(user._id, post).then((response) => {
        if (category === 'feed') {
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
    const { _id, author } = post;
    removePost(author._id, _id).then((response) => {
      dispatch({ type: 'REMOVE_POST', id: _id });
      dispatch(updateUserPostCount(author._id));
      dispatch(updateMessage(true, response.message));
    });
  };
}

export function checkPendingPosts(category, userId) {
  return function checkPendingPostsThunk(dispatch, getState) {
    const { total } = getState().PostReducer.posts;
    getNumPosts(category, userId).then((response) => {
      const newPostCount = response.count - total;
      if (newPostCount > 0) {
        fetchNewPosts(category, userId, newPostCount).then((res) => {
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

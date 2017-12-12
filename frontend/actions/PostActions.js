import { getAllPosts, findUser, getUserPosts, addPost } from '../utils/apiUtils';

export function getPosts() {
  return function getPostsThunk(dispatch) {
    dispatch(requestPosts());
    getAllPosts().then(response => {
      let err = false;
      dispatch({type: 'FETCH_POSTS', posts: response.allPosts});
      dispatch(receivedPosts(err));
    });
  };
};

export function findUserPosts(username) {
  return function findUserPosts(dispatch) {
    dispatch(requestPosts());
    findUser(username).then(userResponse => {
      let err;
      if (userResponse.user !== null) {
        err = false;
        getUserPosts(userResponse.user._id).then(response => {
          dispatch({type: 'FETCH_POSTS', posts: response.userPosts});
          dispatch(receivedPosts(err));
        });
      } else {
        err = true;
        dispatch(receivedPosts(err));
      }
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

export const requestPosts = () => {
  return {
    type: 'FETCH_POST_STATUS',
    errorStatus: false,
    fetchStatus: true
  };
};

export const receivedPosts = (err) => {
  return {
    type: 'FETCH_POST_STATUS',
    errorStatus: err,
    fetchStatus: false
  };
};

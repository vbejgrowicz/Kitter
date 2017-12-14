import { getAllPosts } from '../utils/apiUtils';

export function findAllPosts(id) {
  return function findAllPosts(dispatch) {
    dispatch({type: 'GET_HOMEPAGE_POSTS'});
    getAllPosts().then(response => {
      dispatch({type: 'SET_HOMEPAGE_POSTS', posts: response.allPosts});
    });
  };
};


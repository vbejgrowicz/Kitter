import { FETCH_POST_STATUS, FETCH_POSTS, ADD_POST } from '../actions/types';

const initialState = {
  Posts: [],
  isFetching: false,
  error: false,
}

export function PostReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state,
        {
          Posts: action.posts
        });
    case ADD_POST:
      return Object.assign({}, state,
        {
          Posts: state.Posts.concat(action.post)
        });
    case FETCH_POST_STATUS:
      return Object.assign({}, state,
        {
          error: action.errorStatus,
          isFetching: action.fetchStatus
        });
    default :
    return state;
  }
}

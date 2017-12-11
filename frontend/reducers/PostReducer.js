import { FETCH_POSTS, ADD_POST } from '../actions/types';

const initialState = {
  Posts: [],
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
    default :
    return state;
  }
}

import { GET_HOMEPAGE_POSTS, SET_HOMEPAGE_POSTS } from '../actions/types';

const initialState = {
  posts: {
    list: [],
    isLoading: false
  }
}

export function HomepageReducer (state = initialState, action) {
  switch (action.type) {
    case GET_HOMEPAGE_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              isLoading: true
            })
        }
      );
    case SET_HOMEPAGE_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              list: action.posts,
              isLoading: false
            })
        }
      );
    default :
    return state;
  }
}

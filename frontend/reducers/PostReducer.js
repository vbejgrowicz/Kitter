import { GET_POSTS, SET_POSTS, ADD_POST, REMOVE_POST } from '../actions/types';

const initialState = {
  posts: {
    list: [],
    isLoading: false
  }
}

export function PostReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              isLoading: true
            })
        }
      );
    case SET_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              list: action.posts,
              isLoading: false
            })
        }
      );
    case ADD_POST:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              list: [action.post,...state.posts.list]
            })
        }
      );
    case REMOVE_POST:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              list: state.posts.list.filter(post => post._id !== action.id)
            })
        }
      );
    default :
    return state;
  }
}

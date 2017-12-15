import { GET_POSTS, SET_POSTS, ADD_POST, REMOVE_POST } from '../actions/types';

const initialState = {
  posts: {
    category: null,
    list: [],
    isLoading: false
  }
}

function updatePosts(newPost, posts, category) {
  if (category === 'All'){
    return [newPost, ... posts];
  } else {
    return posts;
  }
}

export function PostReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              category: action.category,
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
              list: updatePosts(action.post, state.posts.list, state.posts.category),
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

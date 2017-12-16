import { GET_POSTS, SET_POSTS, ADD_POST, REMOVE_POST, UPDATE_PENDING_POSTS } from '../actions/types';

const initialState = {
  posts: {
    category: null,
    list: [],
    isLoading: false,
    pendingPosts: {
      status: false,
      count: null
    },
  }
}

function updatePosts(newPost, posts, category, pendingStatus) {
  if (category === 'All' && !pendingStatus){
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
              list: updatePosts(action.post, state.posts.list, state.posts.category, state.posts.pendingPosts.status),
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
    case UPDATE_PENDING_POSTS:
      return Object.assign({}, state,
        {
          posts: Object.assign({}, state.posts,
            {
              pendingPosts: Object.assign({}, state.posts.pendingPosts,
                {
                  status: action.status,
                  count: action.count
                })
            })
        }
      );
    default :
    return state;
  }
}

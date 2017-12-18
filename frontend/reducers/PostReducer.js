import { GET_POSTS, SET_POSTS, ADD_POST, REMOVE_POST, SET_PENDING_POSTS, ADD_PENDING_POSTS, ADD_NEW_POSTS } from '../actions/types';

const initialState = {
  posts: {
    total: null,
    category: null,
    list: [],
    isLoading: false,
    pendingPosts: {
      status: false,
      count: null,
      list: null,
    },
  },
};

function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              category: action.category,
              isLoading: true,
            },
          ),
        },
      );
    case SET_POSTS:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              list: action.posts,
              total: action.total,
              isLoading: false,
            },
          ),
        },
      );
    case ADD_POST:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              list: [action.post, ...state.posts.list],
              total: state.posts.total + 1,
            },
          ),
        },
      );
    case ADD_NEW_POSTS:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              list: [...action.posts, ...state.posts.list],
              total: state.posts.total + action.count,
            },
          ),
        },
      );
    case REMOVE_POST:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              list: state.posts.list.filter(post => post._id !== action.id),
              total: state.posts.total - 1,
            },
          ),
        },
      );
    case SET_PENDING_POSTS:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              pendingPosts: Object.assign(
                {}, state.posts.pendingPosts,
                {
                  status: true,
                  count: action.count,
                  list: action.posts,
                },
              ),
            },
          ),
        },
      );
    case ADD_PENDING_POSTS:
      return Object.assign(
        {}, state,
        {
          posts: Object.assign(
            {}, state.posts,
            {
              list: [...state.posts.pendingPosts.list, ...state.posts.list],
              total: state.posts.total + state.posts.pendingPosts.count,
              pendingPosts: Object.assign(
                {}, state.posts.pendingPosts,
                {
                  status: false,
                  count: null,
                  list: null,
                },
              ),
            },
          ),
        },
      );
    default:
      return state;
  }
}

export default PostReducer;

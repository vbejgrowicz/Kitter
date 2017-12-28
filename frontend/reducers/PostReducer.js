import {
  GET_POSTS,
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_PENDING_POSTS,
  ADD_PENDING_POSTS,
  ADD_NEW_POSTS,
  UPDATE_POST_MESSAGE,
  LIKE_POST,
  UNLIKE_POST,
} from '../actions/types';

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
  message: {
    status: false,
    text: null,
  },
};

function addLikeToPost(array, action) {
  return array.map((item) => {
    if (item._id !== action.post._id) {
      return item;
    }
    return {
      ...item,
      likes: [action.user, ...item.likes],
    };
  });
}

function removeLikeFromPost(array, action) {
  return array.map((item) => {
    if (item._id !== action.post._id) {
      return item;
    }
    return {
      ...item,
      likes: item.likes.filter(like => like.id !== action.user.id),
    };
  });
}

function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          category: action.category,
          isLoading: true,
        },
      };
    case SET_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: action.posts,
          total: action.total,
          isLoading: false,
        },
      };
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: [action.post, ...state.posts.list],
          total: state.posts.total + 1,
        },
      };
    case ADD_NEW_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: [...action.posts, ...state.posts.list],
          total: state.posts.total + action.count,
          pendingPosts: {
            ...state.posts.pendingPosts,
            status: false,
            count: null,
            list: null,
          },
        },
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: state.posts.list.filter(post => post._id !== action.id),
          total: state.posts.total - 1,
        },
      };
    case SET_PENDING_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          pendingPosts: {
            ...state.posts.pendingPosts,
            status: true,
            count: action.count,
            list: action.posts,
          },
        },
      };
    case ADD_PENDING_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: [...state.posts.pendingPosts.list, ...state.posts.list],
          total: state.posts.total + state.posts.pendingPosts.count,
          pendingPosts: {
            ...state.posts.pendingPosts,
            status: false,
            count: null,
            list: null,
          },
        },
      };
    case UPDATE_POST_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          status: action.status,
          text: action.text,
        },
      };
    case LIKE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: addLikeToPost(state.posts.list, action),
        },
      };
    case UNLIKE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          list: removeLikeFromPost(state.posts.list, action),
        },
      };
    default:
      return state;
  }
}

export default PostReducer;

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';

export default combineReducers({
  AuthReducer,
  UserReducer,
  PostReducer,
});

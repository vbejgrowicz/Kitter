import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { PostReducer } from './PostReducer';
import { UserProfileReducer } from './UserProfileReducer';

export default combineReducers({
  AuthReducer,
  PostReducer,
  UserProfileReducer
});

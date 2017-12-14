import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { HomepageReducer } from './HomepageReducer';
import { UserProfileReducer } from './UserProfileReducer';

export default combineReducers({
  AuthReducer,
  HomepageReducer,
  UserProfileReducer
});

import { combineReducers } from 'redux';
import { ViewReducer } from './ViewReducer';
import { AuthReducer } from './AuthReducer';
import { PostReducer } from './PostReducer';

export default combineReducers({
  ViewReducer,
  AuthReducer,
  PostReducer
});

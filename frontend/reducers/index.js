import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer';
import { ViewReducer } from './ViewReducer';

export default combineReducers({
  ViewReducer,
  UserReducer
});

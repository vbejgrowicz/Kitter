import { combineReducers } from 'redux';
import { ViewReducer } from './ViewReducer';
import { AuthReducer } from './AuthReducer';

export default combineReducers({
  ViewReducer,
  AuthReducer
});

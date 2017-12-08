import { SET_USER } from '../actions/types';

const initialState = {
  username: null,
  name: null,
  id: null,
}

export function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state,
        {
          username: action.user.username,
          name: action.user.name,
          id: action.user.id
        });
    default :
    return state;
  }
}

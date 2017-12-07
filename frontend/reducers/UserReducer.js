import { ACTIVE_USER } from '../actions/types';

const initialState = {
  username: null,
  name: null,
  id: null,
}

export function UserReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIVE_USER:
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

import { UPDATE_STATUS } from '../actions/types';

const initialState = {
  isLoading: true,
}

export function ViewReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return Object.assign({}, state,
        {
          isLoading: action.status
        });
    default :
    return state;
  }
}

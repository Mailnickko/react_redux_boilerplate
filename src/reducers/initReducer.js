import { INIT_APP } from '../actions/actions';

const INIT_STATE = {
  message: ''
}

function initReducer (state = INIT_STATE, action) {
  switch(action.type) {
    case INIT_APP:
      return { ...state, message: 'Initialize App...' };
    default:
      return state;
  }
}

export default initReducer;

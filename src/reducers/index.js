import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initReducer from './initReducer';

const rootReducer = combineReducers({
  init: initReducer,
  routing: routerReducer,
});

export default rootReducer;

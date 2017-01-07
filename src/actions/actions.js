import axios from 'axios';
import * as types from './actionTypes';

export const initApp = () => {
  return {
    type: types.INIT_APP
  }
}

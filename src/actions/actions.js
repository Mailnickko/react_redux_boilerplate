import axios from 'axios';
import * as types from './actionTypes';

export function initApp() {
  return {
    type: types.INIT_APP
  }
}

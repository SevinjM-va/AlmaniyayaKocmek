import {createStore} from 'redux';

const initialState = 0;

function reducer (state = initialState, action){
  return state
}

export const store = createStore(reducer);
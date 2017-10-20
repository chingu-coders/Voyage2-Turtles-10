import { SET_LOGIN_STATUS, CHECK_LOGIN_STATUS } from '../actions';
import _ from 'lodash';

export default function(state = false, action) {
  switch(action.type) {
    
    
    case SET_LOGIN_STATUS:
    //es5:
    //const post = action.payload.data;
    //const newState = { ...state };
    //newState[post.id] = post;
    //return newState
    console.log('action from reducer_login', action, state)
    // return { ...state, [action.payload.data.id]: action.payload.data };
    const newState = { ...state };
    newState.loggedIn = action.payload;
    console.log('newState from reducer_login', newState)
    return newState;
    // return { ...state, loggedIn: action.payload };
    break;

    default:
    return state;
  }
}
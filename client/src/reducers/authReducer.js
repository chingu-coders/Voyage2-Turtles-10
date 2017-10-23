import { FETCH_USER } from '../actions';
import _ from 'lodash';

export default function(state = null, action) {
  console.log(action)
  switch(action.type) {
    
    case FETCH_USER:
    
    // console.log('action from reducer_login', action, state)
    return action.payload;
    // return { ...state, loggedIn: action.payload };
    break;

    default:
    return state;
  }
}
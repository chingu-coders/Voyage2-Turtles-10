import { FETCH_SERVER_TEST } from '../actions';


export default function(state = [], action) {
  switch(action.type) {
    
    
    case FETCH_SERVER_TEST:
   
    console.log('action from reducer_server_test', action, state)
   
    const newState = [action.payload.data, ...state];
    
    console.log('newState from reducer_server_test', newState)
    return newState;
    // return { ...state, loggedIn: action.payload };
    break;

    default:
    return state;
  }
}
import { SERVER_TEST } from '../actions';


export default function(state = [], action) {
  switch(action.type) {
    
    
    case SERVER_TEST:
    const newState = [action.payload.data, ...state];
    
    console.log('newState from reducer_server_test', newState)
    return newState;
    break;

    default:
    return state;
  }
}
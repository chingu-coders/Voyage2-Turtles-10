import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serverTest from './reducer_server_test';

const rootReducer = combineReducers({
  auth: authReducer,
  serverTest: serverTest
});

export default rootReducer;
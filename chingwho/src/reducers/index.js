import { combineReducers } from 'redux';
import loginStatusReducer from './reducer_login_status';
import serverTest from './reducer_server_test';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  loginStatus: loginStatusReducer,
  serverTest: serverTest
});

export default rootReducer;
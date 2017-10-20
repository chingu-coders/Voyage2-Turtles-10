import { combineReducers } from 'redux';
import loginStatusReducer from './reducer_login_status';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  loginStatus: loginStatusReducer,

});

export default rootReducer;
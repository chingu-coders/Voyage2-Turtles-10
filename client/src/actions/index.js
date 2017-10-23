import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const CHECK_LOGIN_STATUS = 'check_login_status';
export const SET_USER = 'set_user';
export const SERVER_TEST = 'server_test';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res })
}


export function checkLoginStatus() {
  return {
    type: CHECK_LOGIN_STATUS,
  }
}

export function serverTest() {
  const request = axios.get('/test');

  return {
  type: SERVER_TEST,
  payload: request
  };
}
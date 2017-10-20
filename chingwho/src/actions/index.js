import axios from 'axios';

export const SET_LOGIN_STATUS = 'set_login_status';
export const CHECK_LOGIN_STATUS = 'check_login_status';
export const SET_USER = 'set_user';
export const FETCH_SERVER_TEST = 'fetch_server_test';

export function setLoginStatus(bool) {
  console.log('setloginstatus action called', bool)
  return {
    type: SET_LOGIN_STATUS,
    payload: bool
  }
}

export function checkLoginStatus() {
  return {
    type: CHECK_LOGIN_STATUS,
  }
}

export function fetchServerTest() {
  const request = axios.get('/test');

  return {
  type: FETCH_SERVER_TEST,
  payload: request
  };
}
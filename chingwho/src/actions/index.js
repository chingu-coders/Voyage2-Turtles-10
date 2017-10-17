
export const SET_LOGIN_STATUS = 'set_login_status';
export const CHECK_LOGIN_STATUS = 'check_login_status';
export const SET_USER = 'set_user';

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
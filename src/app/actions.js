export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_COMPLETE = 'USER_LOGIN_COMPLETE';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const RESET_LOGIN_USER = 'RESET_LOGIN_USER';

export const authLogin = payload => ({
  type: USER_LOGIN,
  payload,
});

export const authLogout = () => ({
  type: RESET_LOGIN_USER,
  
});

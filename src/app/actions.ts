import type { LoginCredentials } from '../types/apitypes';

export const USER_LOGIN: string = 'USER_LOGIN';
export const USER_LOGIN_REQUEST: string = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_COMPLETE: string = 'USER_LOGIN_COMPLETE';
export const USER_LOGIN_ERROR: string = 'USER_LOGIN_ERROR';
export const RESET_LOGIN_USER: string = 'RESET_LOGIN_USER';

export const authLogin = (payload: LoginCredentials) => ({
  type: USER_LOGIN,
  payload,
});

export const authLogout = () => ({
  type: RESET_LOGIN_USER,
});


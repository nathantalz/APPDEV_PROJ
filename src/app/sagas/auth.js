import { call, put, takeLatest } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';
import { authLogin as userLoginApi } from '../api/auth';

export function* userLoginAsync(action) {
  console.log('User login saga started: ', action.payload);

  try {
    yield put({ type: USER_LOGIN_REQUEST });

    const data = yield call(userLoginApi, action.payload);

    console.log('Login response: ', data);

    yield put({ type: USER_LOGIN_COMPLETE, payload: data });
  } catch (error) {
    console.log('User Login saga error: ', error);
    yield put({
      type: USER_LOGIN_ERROR,
      error: error?.message || 'Login failed',
    });
  }
}

export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}


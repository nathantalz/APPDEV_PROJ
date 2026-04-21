import {
  RESET_LOGIN_USER,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';

const INITIALSTATE = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export default function reducer(state = INITIALSTATE, action) {
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        error: action?.error || 'Login failed',
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
        error: null,
      };

    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        data: action?.payload || null,
        isLoading: false,
        isError: false,
        error: null,
      };

    case RESET_LOGIN_USER:
      return INITIALSTATE;

    default:
      return state;
  }
}


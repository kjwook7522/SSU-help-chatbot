import { LOG_IN, LOG_OUT } from 'actions/auth';
import { getIsLoggedIn } from 'utils/localstorage';

/* global AuthState AuthAction */

const initState: AuthState = { isLogined: getIsLoggedIn() };

export const authReducer = (state = initState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOG_IN:
      return { isLogined: true, user: action.payload };
    case LOG_OUT:
      return { isLogined: false };
    default:
      return state;
  }
};

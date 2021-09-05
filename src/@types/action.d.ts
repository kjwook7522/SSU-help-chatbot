/* global User */

interface LogInAction {
  type: 'LOG_IN';
  payload: User;
}

interface LogOutAction {
  type: 'LOG_OUT';
}

declare type AuthAction = LogInAction | LogOutAction;
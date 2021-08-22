export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

/* global User, AuthAction */

export const logIn = (user: User): AuthAction => ({
  type: LOG_IN,
  payload: user,
});

export const logOut = (): AuthAction => ({
  type: LOG_OUT,
});

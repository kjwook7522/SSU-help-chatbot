export const getIsLoggedIn = (): boolean => {
  const token: string | null = localStorage.getItem('token');

  if (token) {
    return true;
  }
  return false;
};

export const getToken = (): string | null => {
  const token: string | null = localStorage.getItem('token');
  return token;
};

export const setToken = (newToken: string): void => {
  localStorage.setItem('token', newToken);
};

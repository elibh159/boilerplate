import Cookies from 'js-cookie';

export const AUTH_KEY = "auth-token";
export const setToken = (token: string, expires: Date) => {
  Cookies.set(AUTH_KEY, token, expires);
};
export const removeToken = () => {
  Cookies.remove(AUTH_KEY);
};
export const getToken = () => Cookies.get(AUTH_KEY);

export const validToken = () => {
  const token = Cookies.get(AUTH_KEY);
  return (!!token);
};
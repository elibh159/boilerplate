/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This represents some generic auth provider API, like Firebase.
 */

import { loginApi } from '../services';

const fakeAuthProvider = {
  isAuthenticated: false,
   async signin(username: string, password: string, callback: any) {
    fakeAuthProvider.isAuthenticated = true;
    const result = await loginApi({ username, password });
    callback(result);
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };

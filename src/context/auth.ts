/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This represents some generic auth provider API, like Firebase.
 */

import { getAxiosClient } from '../helpers/api';

const fakeAuthProvider = {
  isAuthenticated: false,
  async signin(username: string, password: string, callback: any) {
    fakeAuthProvider.isAuthenticated = true;
    try {
      const axiosClient = getAxiosClient();
      const response = await axiosClient.post('site/login',
        {
          username,
          password
        });
      const data = response.data;
      callback({ username, ...data })



    } catch (e: any) {
      if (e.response) {
        const data = e.response.data;
        return callback(
          {
            ok: data.ok,
            result: {
              status: data.status,
              message: data.result[0].message
            }
          });
      }
      return callback(
        {
          ok: false,
          result: {
            message: e.message
          }

        }
      );

    }

  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };

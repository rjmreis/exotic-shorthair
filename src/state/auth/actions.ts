import { LOGIN, LoginActionTypes } from './types';

export const login = (trueFalse: boolean): LoginActionTypes => ({
  type: LOGIN,
  trueFalse,
});

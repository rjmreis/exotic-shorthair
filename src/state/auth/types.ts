export const LOGIN = 'LOGIN';

interface LoginAction {
  type: typeof LOGIN;
  trueFalse: boolean;
}

export type LoginActionTypes = LoginAction;

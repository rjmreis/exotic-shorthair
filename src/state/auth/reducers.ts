import { LOGIN, LoginActionTypes } from './types';

const initialState = {
  loggedIn: false,
};

export const authReducer = (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loggedIn: action.trueFalse,
      };
    }

    default: {
      return state;
    }
  }
};

import { INCREASE_COUNTER, DECREASE_COUNTER, CounterActionTypes } from './types';

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case DECREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

import { INCREASE_COUNTER, DECREASE_COUNTER, CounterActionTypes } from './types';

export const increaseCounter = (): CounterActionTypes => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = (): CounterActionTypes => ({
  type: DECREASE_COUNTER,
});

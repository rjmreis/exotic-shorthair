export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

interface SendMessageAction {
  type: typeof INCREASE_COUNTER;
}

interface DeleteMessageAction {
  type: typeof DECREASE_COUNTER;
}

export type CounterActionTypes = SendMessageAction | DeleteMessageAction;

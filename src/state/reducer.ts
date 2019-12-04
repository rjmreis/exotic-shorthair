import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { counterReducer } from './counter/reducers';

export const rootReducer = combineReducers({
  authReducer,
  counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

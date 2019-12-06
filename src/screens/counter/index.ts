import { connect, ConnectedProps } from 'react-redux';

import { login } from '~/state/auth/actions';
import { increaseCounter, decreaseCounter } from '~/state/counter/actions';
import { RootState } from '~/state/reducer';
import { CounterComponent } from './component';

const mapStateToProps = (state: RootState) => ({
  counter: state.counterReducer.counter,
  loggedIn: state.authReducer.loggedIn,
});

const mapDispatchToProps = {
  reduxIncreaseCounter: increaseCounter,
  reduxDecreaseCounter: decreaseCounter,
  reduxLogin: login,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;
export const Counter = connector(CounterComponent);

// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { AppComponent } from './app';
import { store, persistor } from './state/store';

export const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppComponent />
      </PersistGate>
    </Provider>
  );
};

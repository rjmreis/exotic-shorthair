import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { useDarkMode } from 'react-native-dark-mode';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Navigation } from '~/navigation';
import { store, persistor } from './state/store';

const AppNavigator = createAppContainer(Navigation);

export const App = () => {
  const isDarkMode = useDarkMode();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={isDarkMode ? darkTheme : lightTheme}>
          <AppNavigator />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

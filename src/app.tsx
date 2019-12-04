import React from 'react';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { useDarkMode } from 'react-native-dark-mode';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Counter } from '~/screens/counter';

export const AppComponent = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={isDarkMode ? darkTheme : lightTheme}>
        <Counter />
      </ApplicationProvider>
    </>
  );
};

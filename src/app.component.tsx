import React from 'react';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from 'react-native-ui-kitten';
import {useDarkMode} from 'react-native-dark-mode';

const ApplicationContent = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Welcome to RN Starter</Text>
  </Layout>
);

const App = () => {
  const isDarkMode = useDarkMode();

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={isDarkMode ? darkTheme : lightTheme}>
      <ApplicationContent />
    </ApplicationProvider>
  );
};

export default App;

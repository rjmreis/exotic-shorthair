import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Counter } from '~/screens/counter';
import { Auth } from '~/screens/auth';
import TopNavigation from '~/components/top-navigation';

const CounterStack = createStackNavigator({
  Counter: {
    screen: Counter,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} title="Home" />,
    },
  },
});

const AuthStack = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: navigationProps => <TopNavigation {...navigationProps} title="Authentication" />,
    },
  },
});

export const Navigation = createBottomTabNavigator(
  {
    Counter: CounterStack,
    Auth: AuthStack,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      return {
        headerTitle: routeName,
      };
    },
  },
);

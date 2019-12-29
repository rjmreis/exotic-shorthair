import React from 'react';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import { TopNavigation } from '@ui-kitten/components';

interface OwnProps {
  title?: string;
  alignment?: 'center' | 'start' | undefined;
}

type Props = OwnProps & {
  navigation: NavigationStackProp;
};

const TopNavigationComponent: React.FunctionComponent<Props> = ({ navigation, title, alignment = 'center' }) => (
  <SafeAreaView>
    <TopNavigation title={title ? title : navigation.state.routeName} alignment={alignment} />
  </SafeAreaView>
);

export default withNavigation(TopNavigationComponent);

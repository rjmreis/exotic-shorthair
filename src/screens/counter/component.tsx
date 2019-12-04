import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button, Icon, Text } from '@ui-kitten/components';
import { Props } from './';

const PlusIcon = () => <Icon width={32} height={32} name="plus-outline" fill="#3366FF" />;
const MinusIcon = () => <Icon width={32} height={32} name="minus-outline" fill="#3366FF" />;

export const CounterComponent = (props: Props) => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.loggedInContainer}>
        <Text category="s1">Logged In:</Text>
        <Text category="s1">{`${props.loggedIn}`}</Text>

        <Button
          appearance="ghost"
          status="primary"
          size="large"
          onPress={props.loggedIn === false ? () => props.reduxLogin(true) : () => props.reduxLogin(false)}>
          Login
        </Button>
      </Layout>

      <Text category="h3">Counter</Text>

      <Layout style={styles.counterContainer}>
        <Button
          style={styles.buttonText}
          appearance="ghost"
          status="primary"
          icon={PlusIcon}
          onPress={() => props.reduxIncreaseCounter()}
        />

        <Text category="h3">{props.counter.toString()}</Text>

        <Button
          style={styles.buttonText}
          appearance="ghost"
          status="primary"
          icon={MinusIcon}
          onPress={() => props.reduxDecreaseCounter()}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

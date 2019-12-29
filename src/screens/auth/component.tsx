import React from 'react';
import { Text } from '@ui-kitten/components';
import { Container, AuthContainer, AuthButton } from './styles';
import { Props } from './';

export const AuthComponent = (props: Props) => {
  const { loggedIn, reduxLogin } = props;
  return (
    <Container>
      <AuthContainer>
        <Text category="s1">Logged In:</Text>
        <Text category="s1">{`${loggedIn}`}</Text>

        <AuthButton onPress={loggedIn === false ? () => reduxLogin(true) : () => reduxLogin(false)}>
          {loggedIn ? 'Logout' : 'Login'}
        </AuthButton>
      </AuthContainer>
    </Container>
  );
};

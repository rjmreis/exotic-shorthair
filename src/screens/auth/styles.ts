import styled from 'styled-components/native';
import { Button } from '@ui-kitten/components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthButton = styled(Button).attrs(() => ({
  appearance: 'ghost',
  status: 'primary',
  size: 'large',
}))`
  margin: 0 40px;
`;

import styled from 'styled-components/native';
import { Button } from '@ui-kitten/components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CounterButton = styled(Button).attrs(() => ({
  appearance: 'ghost',
  status: 'primary',
}))`
  margin: 0 40px;
`;

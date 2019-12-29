import React from 'react';
import { Icon, Text } from '@ui-kitten/components';
import { Container, CounterContainer, CounterButton } from './styles';
import { Props } from './';

const PlusIcon = () => <Icon width={32} height={32} name="plus-outline" fill="#3366FF" />;
const MinusIcon = () => <Icon width={32} height={32} name="minus-outline" fill="#3366FF" />;

export const CounterComponent = (props: Props) => {
  return (
    <Container>
      <Text category="h3">Counter</Text>

      <CounterContainer>
        <CounterButton icon={PlusIcon} onPress={() => props.reduxIncreaseCounter()} />

        <Text category="h3">{props.counter.toString()}</Text>

        <CounterButton icon={MinusIcon} onPress={() => props.reduxDecreaseCounter()} />
      </CounterContainer>
    </Container>
  );
};

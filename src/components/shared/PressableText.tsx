import React from 'react';
import { Pressable } from 'react-native';
import { Text } from '@src';

type Props = {
  text: string;
  onPress: () => void;
};

const PressableText = ({ text, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text variant='medium'>
        {text}
      </Text>
    </Pressable>
  );
};

export default PressableText;
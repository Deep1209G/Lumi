import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box, Text } from '@src';
import theme from '@src/theme/theme';

type PaymentOptionProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

const PaymentOption = ({
  title,
  selected,
  onPress,
}: PaymentOptionProps) => {
  return (

    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingVertical="m"
      >
        <Text variant="medium" color='textPrimary'>{title}</Text>
        <Ionicons
          name={
            selected
              ? 'radio-button-on'
              : 'radio-button-off'
               }
          size={22}
          color={
            selected
              ? theme.colors.primary
              : theme.colors.tabgray
                }
        />
      </Box>
    </Pressable>
  );
};

export default PaymentOption;
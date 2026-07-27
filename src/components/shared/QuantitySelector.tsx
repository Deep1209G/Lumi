import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import theme from '@src/theme/theme';
import { Theme } from '@src/theme/theme';
type QuantitySelectorProps = {
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  backgroundColor?: keyof Theme['colors'];
};

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  backgroundColor="white",
}: QuantitySelectorProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius="m"
      paddingHorizontal="xs"
      paddingVertical="xs"
    >
      <Ionicons
        name="remove-outline"
        size={22}
        color={theme.colors.primary}
        onPress={onDecrease}
      />

      <Text
        variant="button"
        marginHorizontal="m"
        color='primary'
      >
        {quantity}
      </Text>

      <Ionicons
        name="add-outline"
        size={22}
        color={theme.colors.primary}
        onPress={onIncrease}
      />
    </Box>
  );
};

export default QuantitySelector;
import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import theme from '@src/theme/theme';

type ThemeCardProps = {
  title: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
};

const ThemeCard = ({
  title,
  icon,
  selected,
  onPress,
}: ThemeCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="m"
        marginBottom="m"
          backgroundColor={selected ? 'gray' : 'white'}
        borderRadius="m"
        borderWidth={2}
        borderColor={selected ? 'textPrimary' : 'border'}
      >
        {/* Left */}
        <Box flexDirection="row" alignItems="center">
          <Ionicons
            name={icon}
            size={22}
            color={theme.colors.textPrimary}
          />

          <Text variant="medium" marginLeft="m" color='textPrimary'>
            {title}
          </Text>
        </Box>

        {/* Right */}
        {selected && (
          <Ionicons
            name="checkmark-outline"
            size={24}
            color={theme.colors.textPrimary}
          />
        )}
      </Box>
    </Pressable>
  );
};

export default ThemeCard;
import React from 'react';
import { Pressable } from 'react-native';
import { Box } from '@src';
import theme from '@src/theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DeviceHelper } from '@src/utils';

type PressIconProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPressIcon?: () => void;
  color?: string;
  size?: number;
};

const PressIcon = ({
  icon,
  onPressIcon,
  color = theme.colors.black,
  size = 20,
}: PressIconProps) => {
  return (
    <Pressable onPress={onPressIcon}>
      <Box
        backgroundColor="white"
        height={DeviceHelper.calHeight(40)}
        width={DeviceHelper.calWidth(40)}
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        shadowColor='primary'
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.15}
        shadowRadius={4}
        elevation={5}
      >
        <Ionicons name={icon} size={size} color={color} />
      </Box>
    </Pressable>
  );
};

export default PressIcon;

import React from 'react';
import { Pressable } from 'react-native';
import { Box } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme, { Theme } from '../../theme/theme';

type PressableIconProps = {
  liked?: boolean;
  onPress?: () => void;
  height?: number;
  width?: number;
  iconSize?: number;
  borderColor?: keyof Theme['colors'];
};

const PressableIcon = ({
  liked,
  onPress,
  height = 30,
  width = 30,
  iconSize = 18,
  borderColor = 'white',
}: PressableIconProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        height={height}
        width={width}
        borderColor={borderColor}
        borderWidth={1}
        backgroundColor="white"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        shadowColor="black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.15}
        shadowRadius={4}
        elevation={5}
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={iconSize}
          color={liked ? theme.colors.warning : theme.colors.black}
        />
      </Box>
    </Pressable>
  );
};

export default PressableIcon;

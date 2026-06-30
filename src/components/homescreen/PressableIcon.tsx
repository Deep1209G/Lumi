import React from 'react';
import { Pressable } from 'react-native';
import { Box } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type PressableIconProps = {
  liked?: boolean;
  onPress?: () => void;
};

const PressableIcon = ({liked, onPress}:PressableIconProps) => {

  return (
    <Pressable onPress={onPress}>
      <Box
        height={30}
        width={30}
        backgroundColor="white"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={18}
          color={liked ? theme.colors.warning : theme.colors.black}
        />
      </Box>
    </Pressable>
  );
};

export default PressableIcon;

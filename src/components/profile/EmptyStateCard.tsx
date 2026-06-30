import React from 'react';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';
import { Pressable } from 'react-native';
import { Theme } from '@src/theme/theme';



type Props = {
  leftIcon:  keyof typeof Ionicons.glyphMap;
  color?: string;
  title: string;
  onPress?: () => void;
  backgroundColor?: keyof Theme['colors'];

};
const EmptyStateCard = ({ leftIcon, color=theme.colors.black, title,onPress,  backgroundColor = 'gray', }: Props) => {
  return (
    <Pressable onPress={onPress}>
    <Box
      height={70}
      backgroundColor="white"
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
      padding="m"
      flexDirection="row"
    >
      <Box
        height={40}
        width={40}
        backgroundColor={backgroundColor}
        justifyContent="center"
        alignItems="center"
        borderRadius="s"
      >
        <Ionicons name={leftIcon} size={20} color={color} />
      </Box>
      <Box flex={1} justifyContent="center" marginLeft="m">
        <Text variant='button'>{title}</Text>
      </Box>
      <Box justifyContent='center'>
      <Ionicons name='chevron-forward-outline' size={15} color={theme.colors.icon} />
      </Box>
    </Box>
    </Pressable>
  );
};

export default EmptyStateCard;

import React from 'react';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';
import { Pressable } from 'react-native';


type Props = {
  lefticon:  keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  onPress?: () => void;

};
const EmptyStateCard = ({ lefticon, color, title,onPress }: Props) => {
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
        backgroundColor="gray"
        justifyContent="center"
        alignItems="center"
        borderRadius="s"
      >
        <Ionicons name={lefticon} size={20} color={color} />
      </Box>
      <Box flex={1} justifyContent="center" marginLeft="m">
        <Text variant='button'>{title}</Text>
      </Box>
      <Box justifyContent='center'>
      <Ionicons name='chevron-forward-outline' size={15} color={theme.colors.border} />
      </Box>
    </Box>
    </Pressable>
  );
};

export default EmptyStateCard;

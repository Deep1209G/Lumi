import React from 'react';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';
import { Pressable } from 'react-native';



type Props = {
  title: string;
  onPress?: () => void;
};
const SettingCard = ({  title, onPress, }: Props) => {
  return (
    <Pressable onPress={onPress}>
    <Box
      height={60}
      backgroundColor="white"
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
      padding="m"
      flexDirection="row"
    >
      
      <Box flex={1} justifyContent="center" marginLeft="s">
        <Text variant='button'>{title}</Text>
      </Box>
      <Box justifyContent='center'>
      <Ionicons name='chevron-forward-outline' size={15} color={theme.colors.icon} />
      </Box>
    </Box>
    </Pressable>
  );
};

export default SettingCard;

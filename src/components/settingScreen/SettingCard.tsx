import React from 'react';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';
import { Pressable } from 'react-native';
import { DeviceHelper } from '@src/utils';



type Props = {
  title: string;
  onPress?: () => void;
};
const SettingCard = ({  title, onPress, }: Props) => {
  return (
    <Pressable onPress={onPress}>
    <Box
      height={DeviceHelper.calHeight(60)}
      backgroundColor="mainBackground"
      borderRadius="m"
      borderWidth={1.5}
      borderColor="tabgray"
      padding="m"
      flexDirection="row"
    >
      
      <Box flex={1} justifyContent="center" marginLeft="s">
        <Text variant='button' color='textPrimary'>{title}</Text>
      </Box>
      <Box justifyContent='center'>
      <Ionicons name='chevron-forward-outline' size={DeviceHelper.calWidth(15)} color={theme.colors.black} />
      </Box>
    </Box>
    </Pressable>
  );
};

export default SettingCard;

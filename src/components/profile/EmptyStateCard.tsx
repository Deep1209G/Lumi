import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from '@src/theme/theme';
import { Pressable } from 'react-native';
import { DeviceHelper } from '@src/utils';



type Props = {
  leftIcon?:  keyof typeof Ionicons.glyphMap;
  color?: string;
  title: string;
  onPress?: () => void;
  backgroundColor?: keyof Theme['colors'];

};
const EmptyStateCard = ({ leftIcon, color: colorProp, title, onPress, backgroundColor = 'gray' }: Props) => {
  const theme = useTheme<Theme>();
  const color = colorProp ?? theme.colors.black;
  return (
    <Pressable onPress={onPress}>
    <Box
      height={DeviceHelper.calHeight(75)}
      backgroundColor="mainBackground"
      borderRadius="m"
      borderWidth={1.5}
      borderColor="tabgray"
      padding="m"
      flexDirection="row"
    >
      <Box
        height={DeviceHelper.calHeight(40)}
        width={DeviceHelper.calWidth(40)}
        backgroundColor={backgroundColor}
        justifyContent="center"
        alignItems="center"
        borderRadius="s"
      >
        <Ionicons name={leftIcon} size={DeviceHelper.calWidth(20)} color={color} />
      </Box>
      <Box flex={1} justifyContent="center" marginLeft="m">
        <Text variant='button' color='textPrimary'>{title}</Text>
      </Box>
      <Box justifyContent='center'>
      <Ionicons name='chevron-forward-outline' size={DeviceHelper.calWidth(15)} color={theme.colors.black} />
      </Box>
    </Box>
    </Pressable>
  );
};

export default EmptyStateCard;

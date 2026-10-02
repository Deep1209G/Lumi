/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box } from '@src';
import { Image, Pressable, ImageSourcePropType } from 'react-native';
import { DeviceHelper } from '@src/utils';

type Props = {
  source: ImageSourcePropType;
  onPress?: () => void;
};

const SocialButton = ({ source, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <Box
        height={DeviceHelper.calHeight(50)}
        width={DeviceHelper.calWidth(100)}
        borderWidth={1.5}
        borderColor="tabgray"
        backgroundColor="tabgray"
        borderRadius="m"
        justifyContent="center"
        alignItems="center"
      >
        <Image source={source} style={{ width: DeviceHelper.calWidth(24), height: DeviceHelper.calWidth(24) }} />
      </Box>
    </Pressable>
  );
};

export default SocialButton;

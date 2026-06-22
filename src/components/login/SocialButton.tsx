/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box } from '@src';
import { Image, Pressable, ImageSourcePropType } from 'react-native';

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
        height={50}
        width={100}
        borderColor="border"
        backgroundColor="mainBackground"
        borderRadius="m"
        justifyContent="center"
        alignItems="center"
      >
        <Image source={source} style={{ width: 24, height: 24 }} />
      </Box>
    </Pressable>
  );
};

export default SocialButton;

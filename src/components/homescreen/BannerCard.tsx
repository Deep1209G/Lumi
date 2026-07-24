/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground } from 'react-native';
import { Box, Text } from '@src';

type Props = {
  image: any;
  title?: string;
  subtitle?: string;
  width: number;
};

const BannerCard = ({ image, title, subtitle, width }: Props) => {
  return (
    <ImageBackground
      source={image}
      style={{
        width,
        height: 150,
        justifyContent: 'center',
      }}
      imageStyle={{
        borderRadius: 12,
      }}
    >
      <Box paddingLeft="s">
        <Text variant="subtitle" color="white">
          {title}
        </Text>

        <Text variant="medium" color="green">
          {subtitle}
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default BannerCard;

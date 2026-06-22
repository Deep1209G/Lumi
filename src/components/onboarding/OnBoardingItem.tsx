import React from 'react';
import { Image } from 'react-native';
import { Box, Text } from '@src';

const OnboardingItem = ({ item }: any) => {
  return (
    <Box flex={1}>
      <Image
        source={item.image}
        style={{ width: '100%', height: 400 }}
        resizeMode="cover"
      />

      <Box padding="m">
        <Text variant="title">
          {item.title}
        </Text>

        <Text variant="body">
          {item.description}
        </Text>
      </Box>
    </Box>
  );
};

export default OnboardingItem;
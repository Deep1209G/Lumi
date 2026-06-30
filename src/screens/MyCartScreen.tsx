/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme/theme';

const MyCartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">
        <Text variant="heading">
          My Cart (0)
        </Text>
        <Box marginTop="xxxl" alignItems="center">
          <Box
            height={60}
            width={60}
            backgroundColor="white"
            borderColor="border"
            borderWidth={2}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
          >
            <Ionicons
              name="bag-outline"
              size={30}
              color={theme.colors.border}
            />
          </Box>
          <Text marginTop="m" variant="button">
            No Saved Items
          </Text>
          <Text marginTop="s" variant="medium">
            Tap the heart on any product to save it here.
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default MyCartScreen;

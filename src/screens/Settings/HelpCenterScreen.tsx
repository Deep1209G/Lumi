/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, Text } from '@src';
import { Pressable } from 'react-native';
import theme from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpCenterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>
      {/*Heading Section */}
      <Box>
        <HeaderBack title="Help Center" />
      </Box>

      {/* Support Card */}
      <Box marginTop='m'>
        <Pressable onPress={() => console.log('Pressed chat with support')}>
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
              backgroundColor="white"
              justifyContent="center"
              alignItems="center"
              borderRadius="s"
            >
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={theme.colors.black}
              />
            </Box>
            <Box flex={1} justifyContent="center" marginLeft="m">
              <Text variant="button">Chat with Support</Text>
            </Box>
            <Box justifyContent="center">
              <Ionicons
                name="chevron-forward-outline"
                size={15}
                color={theme.colors.icon}
              />
            </Box>
          </Box>
        </Pressable>
      </Box>
    </SafeAreaView>
  );
};

export default HelpCenterScreen;

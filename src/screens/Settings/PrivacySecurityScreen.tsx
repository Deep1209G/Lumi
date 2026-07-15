/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack } from '@src';

const PrivacySecurityScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      {/*Heading Section */}
      <Box paddingLeft='m' paddingRight='m'>
        <HeaderBack title="Privacy & Security" />
      </Box>
    </SafeAreaView>
  );
};

export default PrivacySecurityScreen;

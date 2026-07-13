/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack } from '@src';
import theme from '../../theme/theme';

const PrivacySecurityScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>
     
      {/*Heading Section */}
      <Box>
        <HeaderBack title="Privacy & Security" />
      </Box>
    </SafeAreaView>
  );
};

export default PrivacySecurityScreen;

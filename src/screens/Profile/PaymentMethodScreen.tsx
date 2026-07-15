/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack } from '@src';

const PaymentMethodScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title="Payments" />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

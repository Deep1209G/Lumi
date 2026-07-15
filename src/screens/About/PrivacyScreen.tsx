import React from 'react';
import { Box, HeaderBack } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyScreen = () => {
  return (
       <SafeAreaView>
      <Box paddingLeft='m' paddingRight='m'>

        {/*Header */}
        <HeaderBack title="Privacy Policy" />
      </Box>
    </SafeAreaView>
  )
}

export default PrivacyScreen
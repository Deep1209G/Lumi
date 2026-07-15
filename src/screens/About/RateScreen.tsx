import React from 'react';
import { Box, HeaderBack } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';

const RateScreen = () => {
  return (
         <SafeAreaView>
      <Box paddingLeft='m' paddingRight='m'>

        {/*Header */}
        <HeaderBack title="Rate The App" />
      </Box>
    </SafeAreaView>
  )
}

export default RateScreen
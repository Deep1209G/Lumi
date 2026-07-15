import React from 'react';
import { Box, HeaderBack } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';

const LicensesScreen = () => {
  return (
         <SafeAreaView>
      <Box paddingLeft='m' paddingRight='m'>

        {/*Header */}
        <HeaderBack title="Licenses" />

        
      </Box>

    </SafeAreaView>
  )
}

export default LicensesScreen
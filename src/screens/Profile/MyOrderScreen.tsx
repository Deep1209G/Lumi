/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, HeaderBack, MyOrderCard} from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';


const MyOrderScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Header Section */}
      <Box>
      <HeaderBack title='Order'/>
      </Box>

      {/*Card Section */}
      <Box marginTop='l'>
      <MyOrderCard />
      </Box>


    </SafeAreaView>
  );
};

export default MyOrderScreen;

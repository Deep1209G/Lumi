/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, Text } from '@src';
import { Image } from 'react-native';
import Images from '../../assets/images/index';
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '../../theme/theme'

const MyOrderCard = () => {
  return (
    <Box
      padding="m"
      height={140}
      backgroundColor="white"
      borderRadius="m"
      borderColor="border"
      borderWidth={1}
    >
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="button">ORD_ID</Text>
        <Text variant="medium" color="green">
          Status
        </Text>
      </Box>

      <Box marginTop="s">
        <Image
          source={Images.avatar1}
          style={{ height: 50, width: 50, borderRadius: 14 }}
        />
      </Box>
       
    <Box flexDirection='row' justifyContent='space-between' alignItems='center'  marginTop='m'>

      <Box flexDirection='row' alignItems='center' >
        <Ionicons name='time-outline' color={theme.colors.icon} size={14}/>
        <Text variant='small' marginLeft='xs'>Jun 12 2026</Text>
      </Box>

      <Box>
        <Text variant="rupees" >
            ₹ 899
        </Text>
      </Box>

      </Box>
    </Box>
  );
};

export default MyOrderCard;

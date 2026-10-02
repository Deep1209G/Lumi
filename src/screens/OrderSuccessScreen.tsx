import React from 'react';
import { Box, CustomButton, PressableText, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { DeviceHelper } from '@src/utils';

const OrderSuccessScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      padding="l"
    >
      {/* Success Icon */}
      <Box
        height={DeviceHelper.calHeight(80)}
        width={DeviceHelper.calWidth(80)}
        backgroundColor="sucess"
        borderRadius="round"
        justifyContent="center"
        alignItems="center"
      >
        <Ionicons name="checkmark-outline" size={DeviceHelper.calWidth(40)} color="green" />
      </Box>

      {/* Add to Cart Message */}
      <Text marginTop="m" variant="heading">
       Order placed
      </Text>

      {/* Description */}
      <Text marginTop="m" variant="description" textAlign="center">
        your order has been confirmed and will be shipped soon. Track it anytime from your orders.
      </Text>

      {/* Button */}
      <Box marginTop="xl" width="100%">
        <CustomButton
          title="Track Order"
          onPress={() =>
            navigation.navigate('MyOrder')
          }
        />
      </Box>

      {/* Button */}
      <Box marginTop="l">
        <PressableText
          text="Back To Home"
          onPress={() =>
            navigation.navigate('MainTab', {
              screen: 'Home',
            })
          }
        />
      </Box>
    </Box>
  );
};

export default OrderSuccessScreen;

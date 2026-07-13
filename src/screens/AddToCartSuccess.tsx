import React from 'react';
import { Box, CustomButton, PressableText, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

const AddToCartSuccess = () => {
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
        height={80}
        width={80}
        backgroundColor="sucess"
        borderRadius="round"
        justifyContent="center"
        alignItems="center"
      >
        <Ionicons name="checkmark-outline" size={40} color="green" />
      </Box>

      {/* Add to Cart Message */}
      <Text marginTop="m" variant="heading">
        Added to Cart
      </Text>

      {/* Description */}
      <Text marginTop="m" variant="description" textAlign="center">
        This item is now in your cart, ready for checkout.
      </Text>

      {/* Button */}
      <Box marginTop="xl" width="100%">
        <CustomButton
          title="View Cart"
          onPress={() =>
            navigation.navigate('MainTab', {
              screen: 'Cart',
            })
          }
        />
      </Box>
      {/* Button */}
      <Box marginTop="l">
        <PressableText
          text="Continue Shopping"
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

export default AddToCartSuccess;

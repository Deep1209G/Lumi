/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/theme';
import { Box, Text, PressIcon, ProgressStepper, OrderSummary, AddressSelector } from '@src';
import { FlatList } from 'react-native';
import { CartContext } from '@src/context/CardContext';

const CheckoutScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const { cart } = useContext(CartContext);
  console.log('Cart:', cart);
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>
      {/*Header */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <PressIcon
          icon="chevron-back-outline"
          onPressIcon={() => navigation.goBack()}
        />
        <Text variant="heading">Checkout</Text>
        <Box />
      </Box>

      {/*Progress Stepper */}
      <Box marginTop="l">
        <ProgressStepper
          currentStep={1}
          steps={['Cart', 'Checkout', 'Payment']}
        />
      </Box>

      {/*Order Summary*/}
      <Box marginTop="l">
        <Text variant="body" marginBottom="s">
          Order Summary
        </Text>
        <FlatList
          data={cart}
          keyExtractor={item => item.product.id}
          renderItem={({ item }) => (
            <OrderSummary product={item.product} quantity={item.quantity} />
          )}
        />
      </Box>

      {/*Order Summary*/}
      <Box marginTop="s">
        <Text variant="body" marginBottom="s">
          Shipping Address
        </Text>
        <AddressSelector
        onPress={() => navigation.navigate('Address')} />
      </Box>

    </SafeAreaView>
  );
};

export default CheckoutScreen;

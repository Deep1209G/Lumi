/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CartContext } from '@src/context/CardContext';
import { RootStackParamList } from '../navigation/AppNavigation';
import useCartSummary from '../hooks/useCartSummary';
import useAddress from '@src/hooks/useAddress';

import { useTheme } from '@shopify/restyle';
import {
  Box,
  Text,
  PressIcon,
  ProgressStepper,
  OrderSummary,
  AddressSelector,
  CustomButton,
} from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

const CheckoutScreen = () => {
  const theme = useTheme<Theme>();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();

  const { cart } = useContext(CartContext);

  const { selectedAddress } = useAddress();
  const [addressError, setAddressError] = useState('');

  const { totalItems, subtotal, gst, shipping, total } = useCartSummary(cart);

  const handleContinue = () => {
    if (!selectedAddress) {
      setAddressError('Please select the address');
      return;
    }
    setAddressError('');
    navigation.navigate('Payment');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <Box flex={1} paddingLeft="l" paddingRight="l">
        {/* Header */}
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

          <Box width={DeviceHelper.calWidth(24)} />
        </Box>

        {/* Progress Stepper */}
        <Box marginTop="l" marginBottom="l">
          <ProgressStepper
            currentStep={1}
            steps={['Cart', 'Checkout', 'Payment']}
          />
        </Box>

        <FlatList
          style={{ flex: 1 }}
          data={cart}
          keyExtractor={item => item.product.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: DeviceHelper.calHeight(20),
          }}
          renderItem={({ item }) => (
            <OrderSummary product={item.product} quantity={item.quantity} />
          )}
          ListHeaderComponent={
            <Text variant="body" marginBottom="s">
              Order Summary
            </Text>
          }
          ListFooterComponent={
            <>
              {/* Shipping Address */}
              <Box marginTop="m">
                <Text variant="body" marginBottom="s">
                  Shipping Address
                </Text>

                <AddressSelector
                  fullName={selectedAddress?.fullName ?? 'No Address'}
                  address={
                    selectedAddress
                      ? `${selectedAddress.house}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pincode}`
                      : 'Please add your shipping address'
                  }
                  type={selectedAddress?.type}
                  onPress={() => {
                    setAddressError('');
                    navigation.navigate('AddressList');
                  }}
                />
                {!!addressError && (
                  <Text variant="small" color="warning" marginTop="xs">
                    {addressError}
                  </Text>
                )}
              </Box>

              {/* Bill */}
              <Text variant="subtitle" marginTop='m'>Bill</Text>
              <Box marginTop="s">
                <Box
                  backgroundColor="white"
                  borderRadius="l"
                  padding="l"
                  borderWidth={1}
                  borderColor="tabgray"
                  shadowColor="primary"
                  shadowOffset={{ width: 0, height: 2 }}
                  shadowOpacity={0.08}
                  shadowRadius={8}
                  elevation={4}
                >
                  <Box
                    marginTop="m"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Text variant="body">Items ({totalItems})</Text>

                    <Text variant="description" color="primary">
                      ₹ {subtotal.toFixed(2)}
                    </Text>
                  </Box>

                  <Box
                    marginTop="s"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Text variant="body">GST (18%)</Text>

                    <Text variant="description" color="primary">
                      ₹ {gst.toFixed(2)}
                    </Text>
                  </Box>

                  <Box
                    marginTop="s"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Text variant="body">Shipping</Text>

                    <Text variant="description" color="green">
                      {shipping === 0 ? 'Free' : `₹ ${shipping.toFixed(2)}`}
                    </Text>
                  </Box>

                  <Box marginTop="m" borderTopWidth={1} borderColor="border" />

                  <Box
                    marginTop="m"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text variant="subtitle">Total</Text>

                    <Text variant="subtitle" color="primary">
                      ₹ {total.toFixed(2)}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </>
          }
        />
      </Box>

      {/* Bottom Button */}
      <Box
        backgroundColor="white"
        paddingHorizontal="l"
        paddingVertical="m"
        borderTopWidth={1.5}
        borderColor="tabgray"
      >
        <CustomButton
          title={`Continue to Payment ₹${total.toFixed(2)}`}
          rightIcon="arrow-forward-outline"
          onPress={handleContinue}
        />
      </Box>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

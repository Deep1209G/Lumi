/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CartContext } from '@src/context/CardContext';
import { RootStackParamList } from '../navigation/AppNavigation';
import useCartSummary from '../hooks/useCartSummary';
import { Address, getAddress } from '@src/utils/addressStorage';
import {
  Box,
  Text,
  PressIcon,
  ProgressStepper,
  OrderSummary,
  AddressSelector,
  CustomButton,
} from '@src';

const CheckoutScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      const loadAddress = async () => {
        const data = await getAddress();

        if (data) {
          setAddress(data);
        }
      };

      loadAddress();
    }, []),
  );
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();
  const { cart } = useContext(CartContext);

  const { totalItems, subtotal, gst, shipping, total } = useCartSummary(cart);
  const [address, setAddress] = useState<Address | null>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="l">
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

          <Box width={24} />
        </Box>

        {/* Progress Stepper */}
        <Box marginTop="l" marginBottom="l">
          <ProgressStepper
            currentStep={1}
            steps={['Cart', 'Checkout', 'Payment']}
          />
        </Box>

        {/* Scrollable Content */}
        <FlatList
          style={{ flex: 1 }}
          data={cart}
          keyExtractor={item => item.product.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
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
                  fullName={address?.fullName ?? 'No Address'}
                  address={
                    address?.address ?? 'Please add your shipping address'
                  }
                  onPress={() => navigation.navigate('Address')}
                />
              </Box>

              {/* Bill */}
              <Box
                marginTop="l"
                padding="m"
                borderRadius="m"
                backgroundColor="white"
              >
                <Text variant="subtitle">Bill</Text>

                <Box
                  marginTop="m"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="body">Items ({totalItems})</Text>

                  <Text variant="description">₹ {subtotal.toFixed(2)}</Text>
                </Box>

                <Box
                  marginTop="s"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="body">GST (18%)</Text>

                  <Text variant="description">₹ {gst.toFixed(2)}</Text>
                </Box>

                <Box
                  marginTop="s"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="body">Shipping</Text>

                  <Text variant="description">
                    {shipping === 0 ? 'Free' : `₹ ${shipping.toFixed(2)}`}
                  </Text>
                </Box>

                <Box marginTop="m" borderTopWidth={1} borderColor="border" />

                <Box
                  marginTop="m"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="subtitle">Total</Text>

                  <Text variant="subtitle">₹ {total.toFixed(2)}</Text>
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
        borderTopWidth={1}
        borderColor="border"
      >
        <CustomButton
          title={`Continue to Payment ₹${total.toFixed(2)}`}
          rightIcon="arrow-forward-outline"
          onPress={() => navigation.navigate('Payment')}
        />
      </Box>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

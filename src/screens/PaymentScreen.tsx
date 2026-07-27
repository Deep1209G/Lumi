/* eslint-disable react-native/no-inline-styles */

import React, { useState, useContext } from 'react';
import { Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderContext } from '@src/context/OrderContext';
import {
  Box,
  Text,
  PressIcon,
  ProgressStepper,
  PaymentAccordion,
  PaymentOption,
  CustomTextInput,
  CustomButton,
} from '@src';

import { RootStackParamList } from '../navigation/AppNavigation';
import { paymentMethods } from '@src/data/paymentMethods';
import { wallets } from '@src/data/wallets';
import { CartContext } from '@src/context/CardContext';
import useCartSummary from '@src/hooks/useCartSummary';
import theme from '@src/theme/theme';

const PaymentScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();

  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const { total } = useCartSummary(cart);

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAccordion = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  const handlePayment = async () => {
    console.log('Button Pressed');

    if (!selectedPayment) {
      Alert.alert('Please select a payment method');
      return;
    }

    try {
      // Save order
      await addOrder(cart);

      // Clear cart
      await clearCart();

      // Navigate
      navigation.navigate('OrderSuccess');
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      {/* Scrollable Content */}
      <Box flex={1} paddingLeft="l" paddingRight="l" >
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

          <Text variant="heading">Payment</Text>

          <Box width={24} />
        </Box>

        {/* Progress Stepper */}
        <Box marginTop="m">
          <ProgressStepper
            currentStep={2}
            steps={['Cart', 'Checkout', 'Payment']}
          />
        </Box>

        {/* Payment Methods */}
        <Box flex={1} marginTop="l">
          <FlatList
            data={paymentMethods}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            renderItem={({ item }) => (
              <PaymentAccordion
                title={item.title}
                leftIcon={item.icon}
                expanded={expandedId === item.id}
                onPress={() => handleAccordion(item.id)}
              >
                {/* UPI */}
                {item.id === 'upi' && (
                  <>
                    <PaymentOption
                      title="Google Pay"
                      selected={selectedPayment === 'Google Pay'}
                      onPress={() => setSelectedPayment('Google Pay')}
                    />

                    <PaymentOption
                      title="PhonePe"
                      selected={selectedPayment === 'PhonePe'}
                      onPress={() => setSelectedPayment('PhonePe')}
                    />

                    <PaymentOption
                      title="Paytm"
                      selected={selectedPayment === 'Paytm'}
                      onPress={() => setSelectedPayment('Paytm')}
                    />
                  </>
                )}

                {/* Card */}
                {item.id === 'card' && (
                  <>
                    <CustomTextInput
                      placeholder="Card Number"
                      value={cardNumber}
                      onChangeText={setCardNumber}
                      leftIcon="card-outline"
                    />

                    <Box marginTop="m">
                      <CustomTextInput
                        placeholder="Card Holder Name"
                        value={cardHolder}
                        onChangeText={setCardHolder}
                        leftIcon="person-outline"
                      />
                    </Box>

                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      marginTop="m"
                    >
                      <Box flex={1} marginRight="s">
                        <CustomTextInput
                          placeholder="MM/YY"
                          value={expiry}
                          onChangeText={setExpiry}
                        />
                      </Box>

                      <Box flex={1} marginLeft="s">
                        <CustomTextInput
                          placeholder="CVV"
                          value={cvv}
                          onChangeText={setCvv}
                          secureTextEntry
                        />
                      </Box>
                    </Box>
                  </>
                )}

                {/* Wallet */}
                {item.id === 'wallet' &&
                  wallets.map(wallet => (
                    <PaymentOption
                      key={wallet.id}
                      title={wallet.title}
                      selected={selectedPayment === wallet.id}
                      onPress={() => setSelectedPayment(wallet.id)}
                    />
                  ))}

                {/* Cash on Delivery */}
                {item.id === 'cod' && (
                  <PaymentOption
                    title="Cash on Delivery"
                    selected={selectedPayment === 'cod'}
                    onPress={() => setSelectedPayment('cod')}
                  />
                )}
              </PaymentAccordion>
            )}
          />
        </Box>
      </Box>

      {/* Fixed Bottom Button */}
      <Box
        backgroundColor="white"
        paddingHorizontal="l"
        paddingVertical="m"
        borderTopWidth={1}
        borderColor="tabgray"
      >
        <CustomButton
          title={`Pay ₹${total.toFixed(2)}`}
          rightIcon="lock-closed-outline"
          onPress={handlePayment}
        />
      </Box>
    </SafeAreaView>
  );
};

export default PaymentScreen;

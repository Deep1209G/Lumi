/* eslint-disable react-native/no-inline-styles */

import React, { useState, useContext } from 'react';
import { Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderContext } from '@src/context/OrderContext';
import { useAuth } from '@src/context/AuthContext';
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
import { createOrder } from '@src/services/order.service';
import { RootStackParamList } from '../navigation/AppNavigation';
import { paymentMethods } from '@src/data/paymentMethods';
import { wallets } from '@src/data/wallets';
import { CartContext } from '@src/context/CardContext';
import useCartSummary from '@src/hooks/useCartSummary';
import theme from '@src/theme/theme';
import RazorpayCheckout from 'react-native-razorpay';
import {
  createPaymentOrder,
  verifyPayment,
} from '@src/services/payment.service';
const PaymentScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();

  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const { user: authUser } = useAuth();
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
    if (!selectedPayment) {
      Alert.alert('Please select a payment method');
      return;
    }

    // For now, only COD uses the existing flow.
    if (selectedPayment === 'cod') {
      try {
        await addOrder(cart);
        await clearCart();
        navigation.navigate('OrderSuccess');
      } catch (error) {
        console.log(error);
        Alert.alert('Something went wrong');
      }

      return;
    }

    try {
      const response = await createPaymentOrder(Math.round(total));

      if (!response?.success || !response?.order) {
        Alert.alert('Payment Failed', response?.message || 'Could not connect to payment server. Make sure the backend is running.');
        return;
      }

      const getPaymentMethod = () => {
        if (['Google Pay', 'PhonePe', 'Paytm'].includes(selectedPayment)) return 'upi';
        if (selectedPayment === 'card') return 'card';
        if (['Paytm Wallet', 'Amazon Pay', 'Mobikwik'].includes(selectedPayment)) return 'wallet';
        return undefined;
      };

      const options: any = {
        description: 'Lumi Order Payment',
        currency: response.order.currency,
        key: 'rzp_test_TlgHmjJwjSCV2x',
        amount: response.order.amount,
        name: 'Lumi',
        order_id: response.order.id,
        method: getPaymentMethod(),
        prefill: {
          name: authUser?.name || 'Customer',
          email: authUser?.email || 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#6C63FF',
        },
      };
      console.log('Razorpay options:', options);

      const payment = await RazorpayCheckout.open(options);

      console.log('Payment Success:', payment);

      const verification = await verifyPayment({
        razorpay_order_id: payment.razorpay_order_id,
        razorpay_payment_id: payment.razorpay_payment_id,
        razorpay_signature: payment.razorpay_signature,
      });

      console.log('Verification Response:', verification);
      if (verification.success) {
        console.log("CURRENT USER:", authUser);

        const orderData = {

          userId: authUser?.uid,
          items: cart.map(item => ({
            productId: item.product.id.toString(),
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
          })),

          total: total,

          payment: {
            paymentMethod: 'razorpay',
            razorpayPaymentId: payment.razorpay_payment_id,
            razorpayOrderId: payment.razorpay_order_id,
            razorpaySignature: payment.razorpay_signature,
            paymentStatus: 'success',
          },
        };

        const orderResponse = await createOrder(orderData);
        console.log('ORDER DATA:', JSON.stringify(orderData, null, 2));
        console.log('MongoDB Order:', orderResponse);

        if (orderResponse.success) {
          await clearCart();

          navigation.navigate('OrderSuccess');
        } else {
          Alert.alert('Order creation failed', orderResponse.message);
          console.log('Order creation error details:', orderResponse.message);
        }
      } else {
        Alert.alert(
          'Payment Verification Failed',
          verification.message || 'Please try again',
        );
      }
    } catch (error: any) {
      console.log('RAZORPAY ERROR:', error);

      Alert.alert('Payment Failed', error?.description || 'Unknown error');
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      {/* Scrollable Content */}
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

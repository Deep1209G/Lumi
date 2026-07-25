/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { paymentMethods } from '@src/data/paymentMethods';
import { wallets } from '@src/data/wallets';

import {
  Box,
  HeaderBack,
  PaymentAccordion,
  PaymentOption,
  CustomTextInput,
} from '@src';
import theme from '@src/theme/theme';

const PaymentMethodScreen = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box flex={1} paddingHorizontal="l">
        <HeaderBack title="Payment Methods" />

        <Box flex={1} marginTop="l">
          <FlatList
            data={paymentMethods}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
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
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
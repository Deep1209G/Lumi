/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/theme';
import { Box, Text, PressIcon, ProgressStepper } from '@src';

const PaymentScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
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
      <Box marginTop="m">
        <ProgressStepper
          currentStep={2}
          steps={['Cart', 'Checkout', 'Payment']}
        />
      </Box>
    </SafeAreaView>
  );
};

export default PaymentScreen;

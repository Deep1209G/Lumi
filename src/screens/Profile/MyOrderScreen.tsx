/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, MyOrderCard, PressIcon, Text } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import theme from '../../theme/theme';


const MyOrderScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Header Section */}
      <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
        <PressIcon
          icon="chevron-back-outline"
          onPressIcon={() => navigation.goBack()}
        />
        <Text variant="heading">
          My Orders
        </Text>
        <Box />
      </Box>

      {/*Card Section */}
      <Box marginTop='l'>
      <MyOrderCard />
      </Box>


    </SafeAreaView>
  );
};

export default MyOrderScreen;

/* eslint-disable react-native/no-inline-styles */
import { Box, PressIcon, Text, CustomTextInput, CustomButton } from '@src';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';

const AddressScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Heading Section */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <PressIcon
          icon="chevron-back-outline"
          onPressIcon={() => navigation.goBack()}
        />
        <Text variant="heading">Shipping Address</Text>
        <Box />
      </Box>

      {/*Email Section */}
      <Box marginTop="xxl">
        <Text marginBottom="s" variant="medium" color="textSecondary">
          Full Name
        </Text>
        <CustomTextInput placeholder="Name" leftIcon="person-outline" />
      </Box>

      {/*Address Section */}
      <Box marginTop="m">
        <Text marginBottom="s" variant="medium" color="textSecondary">
          Address
        </Text>
        <CustomTextInput placeholder="Address" leftIcon="location-outline" />
      </Box>

      {/*Button Section */}
      <Box marginTop="l">
      <CustomButton 
      title='Save Address'
      onPress={() => console.log('Address Saved')}/>
      </Box>

    </SafeAreaView>
  );
};

export default AddressScreen;

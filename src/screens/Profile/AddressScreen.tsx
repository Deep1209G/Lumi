/* eslint-disable react-native/no-inline-styles */
import { Box, Text, CustomTextInput, CustomButton, HeaderBack } from '@src';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { saveAddress } from '@src/utils/addressStorage';
const AddressScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const handleSave = async () => {
    await saveAddress({
      fullName,
      address,
    });

    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title="Shipping Address" />
        </Box>

        {/*Email Section */}
        <Box marginTop="xxl">
          <Text marginBottom="s" variant="medium" color="textSecondary">
            Full Name
          </Text>
          <CustomTextInput
            placeholder="Name"
            leftIcon="person-outline"
            value={fullName}
            onChangeText={setFullName}
          />
        </Box>

        {/*Address Section */}
        <Box marginTop="m">
          <Text marginBottom="s" variant="medium" color="textSecondary">
            Address
          </Text>
          <CustomTextInput
            placeholder="Address"
            leftIcon="location-outline"
            value={address}
            onChangeText={setAddress}
          />
        </Box>

        {/*Button Section */}
        <Box marginTop="l">
          <CustomButton title="Save Address" onPress={handleSave} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AddressScreen;

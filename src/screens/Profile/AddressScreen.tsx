/* eslint-disable react-native/no-inline-styles */
import { Box, Text, CustomTextInput, CustomButton, HeaderBack } from '@src';
import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { saveAddress, saveSelectedAddress } from '@src/utils/addressStorage';
import { AuthContext } from '@src/context/AuthContext';
import { ScrollView, Pressable } from 'react-native';
import { Theme } from '@src/theme/theme';

const addressTypes = ['Home', 'Work', 'Other'] as const;
const AddressScreen = () => {
  const theme = useTheme<Theme>();
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  type AddressRouteProp = RouteProp<RootStackParamList, 'Address'>;
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<AddressRouteProp>();
  const editingAddress = route.params?.address;
  const { user } = useContext(AuthContext);
  console.log('Address Screen User:', user);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [house, setHouse] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [type, setType] = useState<'Home' | 'Work' | 'Other'>('Home');

  useEffect(() => {
    if (editingAddress) {
      setFullName(editingAddress.fullName);
      setPhone(editingAddress.phone);
      setPincode(editingAddress.pincode);
      setHouse(editingAddress.house);
      setArea(editingAddress.area);
      setCity(editingAddress.city);
      setState(editingAddress.state);
      setType(editingAddress.type);
    }
  }, [editingAddress]);

  const handleSave = async () => {
    if (!user) {
      return;
    }

    const addressId = editingAddress?.id ?? Date.now().toString();

    await saveAddress(user.uid, {
      id: addressId,
      fullName,
      phone,
      pincode,
      house,
      area,
      city,
      state,
      type,
    });

    await saveSelectedAddress(user.uid, addressId);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box paddingLeft="l" paddingRight="l">
          <Box>
            <HeaderBack title="Shipping Address" />
          </Box>

          <Box marginTop="xxl">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              Full Name
            </Text>

            <CustomTextInput
              placeholder="Name"
              leftIcon="person-outline"
              value={fullName}
              onChangeText={setFullName}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              Mobile Number
            </Text>

            <CustomTextInput
              placeholder="Phone Number"
              leftIcon="call-outline"
              value={phone}
              onChangeText={setPhone}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              Pincode
            </Text>

            <CustomTextInput
              placeholder="Pincode"
              leftIcon="location-outline"
              value={pincode}
              onChangeText={setPincode}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              House / Flat / Building
            </Text>

            <CustomTextInput
              placeholder="Flat, House No"
              leftIcon="home-outline"
              value={house}
              onChangeText={setHouse}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              Area / Street
            </Text>

            <CustomTextInput
              placeholder="Area, Street"
              leftIcon="navigate-outline"
              value={area}
              onChangeText={setArea}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              City
            </Text>

            <CustomTextInput
              placeholder="City"
              leftIcon="business-outline"
              value={city}
              onChangeText={setCity}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              State
            </Text>

            <CustomTextInput
              placeholder="State"
              leftIcon="map-outline"
              value={state}
              onChangeText={setState}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textPrimary">
              Save address as
            </Text>

            <Box flexDirection="row">
              {addressTypes.map(item => (
                <Pressable key={item} onPress={() => setType(item)}>
                  <Box
                    padding="s"
                    marginRight="s"
                    borderRadius="s"
                    borderWidth={1.5}
                    backgroundColor="mainBackground"
                    borderColor={type === item ? 'primary' : 'border'}
                  >
                    <Text>{item}</Text>
                  </Box>
                </Pressable>
              ))}
            </Box>
          </Box>

          <Box marginTop="l">
            <CustomButton title="Save Address" onPress={handleSave} />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;

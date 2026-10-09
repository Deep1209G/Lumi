/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTheme } from '@shopify/restyle';
import { Box, Text, HeaderBack, CustomButton } from '@src';
import useAddress from '@src/hooks/useAddress';
import { saveSelectedAddress } from '@src/utils/addressStorage';
import { AuthContext } from '@src/context/AuthContext';
import { RootStackParamList } from '../navigation/AppNavigation';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

const AddressListScreen = () => {
  const theme = useTheme<Theme>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user } = useContext(AuthContext);
  const { addresses } = useAddress();

  const handleSelectAddress = async (id: string) => {
    if (!user) {
      return;
    }

    await saveSelectedAddress(user.uid, id);
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <Box flex={1} paddingLeft="l" paddingRight="l" paddingBottom="m">
        <HeaderBack title="My Addresses" />

        <FlatList
          data={addresses}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: DeviceHelper.calHeight(20),
            paddingBottom: DeviceHelper.calHeight(20),
          }}
          renderItem={({ item }) => (
            <Box
              backgroundColor="white"
              padding="l"
              borderRadius="l"
              borderWidth={1}
              borderColor="tabgray"
              marginBottom="m"
              shadowColor="primary"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.06}
              shadowRadius={8}
              elevation={3}
            >
              <Pressable onPress={() => handleSelectAddress(item.id)}>
                <Text variant="medium" color="primary">
                  {item.type}
                </Text>

                <Text marginTop="s">{item.fullName}</Text>

                <Text color="textSecondary">{item.phone}</Text>

                <Text color="textSecondary" marginTop="xs">
                  {item.house}, {item.area}, {item.city}, {item.state} -{' '}
                  {item.pincode}
                </Text>
              </Pressable>
              <Box
                marginTop="m"
                backgroundColor="primary"
                borderRadius="m"
                alignItems="center"
              >
                <CustomButton
                  title="Edit"
                  onPress={() =>
                    navigation.navigate('Address', {
                      address: item,
                    })
                  }
                />
              </Box>
              
            </Box>
          )}
        /> 
        
        <CustomButton
          title="Add New Address"
          onPress={() => navigation.navigate('Address')}
        />
        
      </Box>
    </SafeAreaView>
  );
};

export default AddressListScreen;

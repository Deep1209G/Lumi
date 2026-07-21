import React, { useContext } from 'react';
import { FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Box, Text, HeaderBack, CustomButton } from '@src';
import useAddress from '@src/hooks/useAddress';
import { saveSelectedAddress } from '@src/utils/addressStorage';
import { AuthContext } from '@src/context/AuthContext';
import { RootStackParamList } from '../navigation/AppNavigation';

const AddressListScreen = () => {

  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user } = useContext(AuthContext);
  const { addresses } = useAddress();

  const handleSelectAddress = async (id: string) => {
    if (!user) {
      return;
    }

    await saveSelectedAddress(user.id, id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingLeft="l" paddingRight="l">

        <HeaderBack title="My Addresses" />

        <FlatList
          data={addresses}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
          renderItem={({ item }) => (
            <Box
              backgroundColor="white"
              padding="m"
              borderRadius="m"
              borderWidth={1}
              borderColor="border"
              marginBottom="m"
            >

              <Pressable
                onPress={() => handleSelectAddress(item.id)}
              >
                <Text variant="medium">
                  {item.type}
                </Text>

                <Text marginTop="s">
                  {item.fullName}
                </Text>

                <Text color="textSecondary">
                  {item.phone}
                </Text>

                <Text color="textSecondary" marginTop="xs">
                  {item.house}, {item.area}, {item.city}, {item.state} - {item.pincode}
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  navigation.navigate('Address', {
                    address: item,
                  })
                }
              >
                <Box
                  marginTop="m"
                  backgroundColor="gray"
                  padding="s"
                  borderRadius="s"
                  alignItems="center"
                >
                  <Text>
                    Edit
                  </Text>
                </Box>
              </Pressable>

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
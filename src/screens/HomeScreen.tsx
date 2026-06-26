/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CustomButton,
  Box,
  Header,
  SearchBar,
  CategoryTab,
  BannerCard,
  Text,
  PressableText,
} from '@src';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');

    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">
        {/*Header */}
        <Header />

        {/*Search Bar */}
        <Box marginTop="m">
          <SearchBar onPress={() => console.log('option button click')} />
        </Box>

        {/*Category Tab */}
        <Box marginTop="m">
          <CategoryTab />
        </Box>

        {/*Offer Banner*/}
        <Box marginTop="m">
          <BannerCard />
        </Box>

        {/* Popular Text*/}
        <Box  marginTop="m" flexDirection='row' alignItems='center' >
          <Box flex={1} >
          <Text variant='subtitle'>Popular Now</Text>
          </Box>
          <PressableText 
          text="See all"
          onPress={() => console.log("see all item")}/>
        </Box>

        {/* Card */}



        <Box marginTop="m">
          <CustomButton title="Logout" onPress={handleLogout} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton, Box, Header } from '@src';




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


        <Header />

        <CustomButton title="Logout" onPress={handleLogout} />
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;

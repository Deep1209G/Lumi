import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  OnBoardingScreen,
  SplashScreen,
  LoginScreen,
  SignInScreen,
  SearchScreen,
  WishlistScreen,
  DetailScreen
} from '@src';
import BottomTab from './BottomTab';
import { Product } from '@src/data/produts';

export type RootStackParamList = {
  Splash: undefined;
  MainTab: undefined;
  OnBoarding: undefined;
  Login: undefined;
  SignIn: undefined;
  Search: undefined;
  WishList: undefined;
  Detail:{
    product:Product;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainTab" component={BottomTab} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="WishList" component={WishlistScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

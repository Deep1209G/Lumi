import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

import {
  OnBoardingScreen,
  SplashScreen,
  LoginScreen,
  SignInScreen,
  SearchScreen,
  WishlistScreen,
  DetailScreen,
  AddToCartSuccess,
  AddressScreen,
  MyOrderScreen,
  PaymentMethodScreen,
  SettingsScreen,
  NotificationScreen,
  PrivacySecurityScreen,
  AboutScreen,
  DarkModeScreen,
  HelpCenterScreen,
  LanguageScreen,
  CheckoutScreen,
  PaymentScreen,
  OrderSuccessScreen,
} from '@src';

import BottomTab from './BottomTab';
import { Product } from '@src/data/produts';

type BottomTabParamList = {
  Home: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  MainTab: NavigatorScreenParams<BottomTabParamList>;
  OnBoarding: undefined;
  Login: undefined;
  SignIn: undefined;
  Search: undefined;
  WishList: undefined;
  Detail: {
    product: Product;
  };
  AddToCartSuccess: undefined;
  Address: undefined;
  MyOrder: undefined;
  PaymentMethod: undefined;
  Setting: undefined;

  About: undefined;
  Mode: undefined;
  Help: undefined;
  Language: undefined;
  Notification: undefined;
  Privacy: undefined;
  Checkout: undefined;
  Payment: undefined;
  OrderSuccess: undefined;
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
      <Stack.Screen name="AddToCartSuccess" component={AddToCartSuccess} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="MyOrder" component={MyOrderScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="Setting" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Mode" component={DarkModeScreen} />
      <Stack.Screen name="Help" component={HelpCenterScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Privacy" component={PrivacySecurityScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

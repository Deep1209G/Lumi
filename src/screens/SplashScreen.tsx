/* eslint-disable react-native/no-inline-styles */

import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images, Text } from '@src';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    checkLogin();
  });

const checkLogin = async () => {
  const token = await AsyncStorage.getItem('token');

  setTimeout(() => {
    if (token) {
      navigation.replace('Home');
    } else {
      navigation.replace('OnBoarding');
    }
  }, 3000);
};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={Images.logo1}
        style={{
          width: 100,
          height: 100,
        }}
      />

      <Text marginTop="m" variant="title">
        LUMI
      </Text>

      <Text variant="medium" color="textSecondary">
        Wear what feels like you
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Images, Text } from '@src';
import { getAuth } from '@react-native-firebase/auth';
import { DeviceHelper } from '@src/utils';

const SplashScreen = ({ navigation }: any) => {
  const navigated = useRef(false);

  useEffect(() => {
    const checkLogin = async () => {
      if (navigated.current) {
        return;
      }

      navigated.current = true;

      const firebaseUser = getAuth().currentUser;

      const dummyUser = await AsyncStorage.getItem(
        'isLoggedIn',
      );

      if (firebaseUser || dummyUser === 'true') {
        navigation.replace('MainTab', {
          screen: 'Home',
        });
      } else {
        navigation.replace('OnBoarding');
      }
    };

    const timer = setTimeout(() => {
      checkLogin();
    }, 3000);

    return () => clearTimeout(timer);

  }, [navigation]);


  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Image
        source={Images.logo1}
        style={{
          width: DeviceHelper.calWidth(100),
          height: DeviceHelper.calHeight(100),
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

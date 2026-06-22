/* eslint-disable react-native/no-inline-styles */

import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images, Text } from '@src';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
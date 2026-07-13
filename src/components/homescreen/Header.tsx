/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useRef } from 'react';
import {
  Animated,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Box, Text, Images } from '@src';
import theme from '@src/theme/theme';

const Header = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('user');

      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    getUser();
  }, []);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const handleFlip = () => {
    flipAnim.setValue(0);

    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  const rotateY = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Box flexDirection="row" justifyContent="space-between">
      {/* User Name */}
      <Box>
        <Text variant="medium"> {t('helloWelcome')}</Text>

        <Text variant="subtitle">
          {user?.firstName} {user?.lastName}
        </Text>
      </Box>

      {/* Avatar */}
      <Pressable onPress={handleFlip}>
        <Box
          justifyContent="center"
          alignItems="center"
          borderWidth={2}
          borderColor="icon"
          height={50}
          width={50}
          borderRadius="m"
        >
          <Animated.Image
            source={Images.avatar1}
            style={{
              width: 40,
              height: 40,
              borderRadius: theme.borderRadii.s,
              transform: [
                { perspective: 1000 },
                { rotateY },
              ],
            }}
            resizeMode="cover"
          />
        </Box>
      </Pressable>
    </Box>
  );
};

export default Header;
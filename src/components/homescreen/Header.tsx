/* eslint-disable react-native/no-inline-styles */

import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';

import { useTheme } from '@shopify/restyle';
import { Box, Text, Images } from '@src';
import { Theme } from '@src/theme/theme';
import { useAuth } from '@src/context/AuthContext';
import { DeviceHelper } from '@src/utils';

const Header = () => {
  const theme = useTheme<Theme>();
  const { user } = useAuth();
  const { t } = useTranslation();

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
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text
          variant="small"
          style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 0.3 }}
        >
          {t('helloWelcome')}
        </Text>
        <Text
          variant="subtitle"
          style={{ color: theme.colors.white }}
        >
          {user?.name} 👋
        </Text>
      </Box>

      <Pressable onPress={handleFlip}>
        <Box
          justifyContent="center"
          alignItems="center"
          height={DeviceHelper.calHeight(50)}
          width={DeviceHelper.calWidth(50)}
          borderRadius="m"
          style={{
            borderWidth: 2,
            borderColor: theme.colors.primary,
            backgroundColor: 'rgba(34,197,94,0.15)',
          }}
        >
          <Animated.Image
            source={user?.photo ? { uri: user.photo } : Images.avatar1}
            style={{
              width: DeviceHelper.calWidth(40),
              height: DeviceHelper.calHeight(40),
              borderRadius: theme.borderRadii.s,
              transform: [{ perspective: 1000 }, { rotateY }],
            }}
            resizeMode="cover"
          />
        </Box>
      </Pressable>
    </Box>
  );
};

export default Header;

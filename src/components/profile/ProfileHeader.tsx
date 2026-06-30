/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Box, Images, Text } from '@src';
import { Image } from 'react-native';
import theme from '@src/theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHeader = () => {
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
  return (
    <Box flexDirection='row' >
      <Box
        justifyContent="center"
        alignItems="center"
        borderWidth={2}
        borderColor="border"
        height={70}
        width={70}
        borderRadius="m"
      >
        <Image
          source={Images.avatar}
          style={{ width: 60, height: 60, borderRadius: theme.borderRadii.m }}
        />
      </Box>

      <Box justifyContent='center' marginLeft='m'>
        <Text variant="button">{user?.firstName} {user?.lastName}</Text>
        <Text variant="medium">
           {user?.email}
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileHeader;

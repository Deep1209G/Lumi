/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Text } from '@src';
import theme from '@src/theme/theme';

const Header = () => {
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
    <Box flexDirection='row' justifyContent='space-between'>
      <Box>
        <Text variant="medium">Hello, Welcome</Text>
        <Text variant="subtitle">
          {user?.firstName} {user?.lastName}
        </Text>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        borderWidth={2}
        borderColor="border"
        height={45}
        width={45}
        borderRadius="m"
      >
        <Image
          source={{
            uri: user?.image,
          }}
          style={{ width: 40, height: 40, borderRadius: theme.borderRadii.m }}
        />
      </Box>
    </Box>
  );
};

export default Header;

/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Box, Images, Text } from '@src';
import { Image } from 'react-native';

import theme from '@src/theme/theme';
import { useAuth } from '@src/context/AuthContext';
import { DeviceHelper } from '@src/utils';


const ProfileHeader = () => {

  const { user } = useAuth();


  return (

    <Box flexDirection="row">

      <Box
        justifyContent="center"
        alignItems="center"
        borderWidth={2}
        borderColor="tabgray"
        height={DeviceHelper.calHeight(70)}
        width={DeviceHelper.calWidth(70)}
        borderRadius="m"
      >

        <Image
          source={
            user?.photo
              ? { uri: user.photo }
              : Images.avatar1
          }
          style={{
            width: DeviceHelper.calWidth(60),
            height: DeviceHelper.calHeight(60),
            borderRadius: theme.borderRadii.m,
          }}
        />

      </Box>


      <Box
        justifyContent="center"
        marginLeft="m"
      >

        <Text variant="button">
          {user?.name}
        </Text>


        <Text variant="medium">
          {user?.email}
        </Text>

      </Box>


    </Box>

  );
};


export default ProfileHeader;

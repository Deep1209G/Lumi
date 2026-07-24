/* eslint-disable react-native/no-inline-styles */

import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';

import { Box, Text, Images } from '@src';
import theme from '@src/theme/theme';

import { useAuth } from '@src/context/AuthContext';


const Header = () => {

  const { user } = useAuth();

  const { t } = useTranslation();


  const flipAnim =
    useRef(new Animated.Value(0)).current;



  const handleFlip = () => {

    flipAnim.setValue(0);

    Animated.timing(
      flipAnim,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }
    ).start();

  };



  const rotateY =
    flipAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });



  return (

    <Box flexDirection="row" justifyContent="space-between">


      <Box>

        <Text variant="medium">
          {t('helloWelcome')}
        </Text>


        <Text variant="subtitle">
          {user?.name}
        </Text>


      </Box>



      <Pressable onPress={handleFlip}>

        <Box
          justifyContent="center"
          alignItems="center"
          borderWidth={1.5}
          borderColor="primary"
          height={50}
          width={50}
          borderRadius="m"
        >

          <Animated.Image

            source={
              user?.photo
                ? { uri: user.photo }
                : Images.avatar1
            }

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

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, Images, Text } from '@src';
import { Image } from 'react-native';
import theme from '../../theme/theme';
import { aboutMenu } from '@src/data/aboutMenu';
import SettingCard from '@src/components/settingScreen/SettingCard';
import useAbout from '../../hooks/useAbout';

const AboutScreen = () => {
   const { handleMenuPress } = useAbout();
  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Heading Section */}
      <Box>
        <HeaderBack title="About Lumi" />
      </Box>

      {/*Image Section */}
      <Box alignItems="center">
        <Box
          marginTop="xxxl"
          backgroundColor="black"
          width={100}
          height={100}
          alignItems="center"
          justifyContent="center"
          borderRadius="m"
        >
          <Image
            source={Images.logo1}
            style={{
              width: 65,
              height: 65,
            }}
          />
        </Box>
        <Text variant="button" marginTop="m">
          Lumi
        </Text>
        <Text variant="small" color="textSecondary" marginTop="xs">
          Version 1.0.0
        </Text>
      </Box>

      {/*Card */}
      <Box marginTop='m'>
        {aboutMenu.map(item =>(
          <Box key={item.id} marginTop='m'>
            <SettingCard 
            title={item.title}
            onPress={() => handleMenuPress(item.id)}/>
          </Box>


        ))

        }

      </Box>


    </SafeAreaView>
  );
};

export default AboutScreen;

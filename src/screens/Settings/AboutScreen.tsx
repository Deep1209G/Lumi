/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, Images, Text } from '@src';
import { Image } from 'react-native';
import { aboutMenu } from '@src/data/aboutMenu';
import SettingCard from '@src/components/settingScreen/SettingCard';
import useAbout from '../../hooks/useAbout';

const AboutScreen = () => {
  const { handleMenuPress } = useAbout();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title="About Lumi" />
        </Box>

        {/*Image Section */}
        <Box
          alignItems="center"
          backgroundColor="white"
          marginTop="m"
          borderRadius="m"
          height={250}
          borderWidth={1.5}
          borderColor='gray'
        >
          <Box
            marginTop="xxl"
            backgroundColor="black"
            width={80}
            height={80}
            alignItems="center"
            justifyContent="center"
            borderRadius="m"
          >
            <Image
              source={Images.logo1}
              style={{
                width: 55,
                height: 55,
              }}
            />
          </Box>
          <Text variant="heading" marginTop="s">
            LUMI
          </Text>
          <Text variant="medium" marginTop="s" marginBottom="s">
            Wear what feels like you
          </Text>
          <Box
            backgroundColor="gray"
            padding="xs"
            borderRadius="s"
            alignItems="center"
            justifyContent="center"
          >
            <Text variant="small" color="textSecondary">
              Version 1.0.0
            </Text>
          </Box>
        </Box>

        {/*Card */}
        <Box marginTop="m">
          {aboutMenu.map(item => (
            <Box key={item.id} marginTop="m">
              <SettingCard
                title={item.title}
                onPress={() => handleMenuPress(item.id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AboutScreen;

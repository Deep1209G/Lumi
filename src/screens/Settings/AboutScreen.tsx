/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Box, HeaderBack, Images, Text } from '@src';
import { Image } from 'react-native';
import { aboutMenu } from '@src/data/aboutMenu';
import SettingCard from '@src/components/settingScreen/SettingCard';
import useAbout from '../../hooks/useAbout';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

const AboutScreen = () => {
  const theme = useTheme<Theme>();
  const { handleMenuPress } = useAbout();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
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
          height={DeviceHelper.calHeight(250)}
          borderWidth={1.5}
          borderColor='tabgray'
        >
          <Box
            marginTop="xxl"
            backgroundColor="black"
            width={DeviceHelper.calWidth(80)}
            height={DeviceHelper.calHeight(80)}
            alignItems="center"
            justifyContent="center"
            borderRadius="m"
          >
            <Image
              source={Images.logo1}
              style={{
                width: DeviceHelper.calWidth(55),
                height: DeviceHelper.calHeight(55),
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
            backgroundColor="tabgray"
            padding="xs"
            borderRadius="s"
            alignItems="center"
            justifyContent="center"
          >
            <Text variant="small" color="textPrimary">
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

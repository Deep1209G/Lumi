/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, HeaderBack, Text, TermCard } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';
import { privacyData } from '@src/data/privacyData';
import {ScrollView} from 'react-native'
import theme from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

const PrivacyScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
       <ScrollView showsVerticalScrollIndicator={false}>
      <Box paddingLeft="m" paddingRight="m">
        {/* Header */}
        <HeaderBack title="Privacy Policy" />

        <Box
          backgroundColor="sucess"
          marginTop="m"
          height={DeviceHelper.calHeight(60)}
          justifyContent="center"
          alignItems="center"
          paddingHorizontal="m"
          borderRadius="m"
        >
          <Text variant="medium" color="green">
            We take your privacy seriously. Your data is always protected.
          </Text>
        </Box>

        <Box>
          <Text marginTop="m" variant="medium">
            Last updated: 15 July 2026
          </Text>
        </Box>

        {/*Card of Term Screen */}
        <Box marginTop="s">
          {privacyData.map(item => (
            <TermCard
              key={item.id}
              title={item.title}
              description={item.description}
              number={item.number}
            />
          ))}
        </Box>
      </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyScreen;

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Box,
  HeaderBack,
  Text,
  Toggle,
} from '@src';

import {
  accountSecurity,
  dataPrivacy,
} from '@src/data/privacySecurity';
import { Theme } from '@src/theme/theme';

const PrivacySecurityScreen = () => {
  const theme = useTheme<Theme>();
  const [settings, setSettings] = useState({
    twoFactor: false,
    biometric: true,
    ads: true,
    analytics: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box flex={1} paddingHorizontal="l">

        <HeaderBack title="Privacy & Security" />

        {/* Account Security */}

        <Text
          marginTop="xl"
          marginBottom="m"
          variant="small"
          color="textSecondary"
        >
          ACCOUNT SECURITY
        </Text>

        {accountSecurity.map(item => (
          <Toggle
            key={item.id}
            title={item.title}
            description={item.description}
            value={settings[item.id]}
            onValueChange={value =>
              setSettings(prev => ({
                ...prev,
                [item.id]: value,
              }))
            }
          />
        ))}

        {/* Data & Privacy */}

        <Text
          marginTop="m"
          marginBottom="m"
          variant="small"
          color="textSecondary"
        >
          DATA & PRIVACY
        </Text>

        {dataPrivacy.map(item => (
          <Toggle
            key={item.id}
            title={item.title}
            description={item.description}
            value={settings[item.id]}
            onValueChange={value =>
              setSettings(prev => ({
                ...prev,
                [item.id]: value,
              }))
            }
          />
        ))}

        {/* Delete Account */}

        <Box
          marginTop="m"
          backgroundColor="warning"
          padding="m"
          borderRadius="m"
         
        >
          <Text color="textTernary" variant="medium" alignSelf='center'>
            Delete account
          </Text>
        </Box>

      </Box>
    </SafeAreaView>
  );
};

export default PrivacySecurityScreen;
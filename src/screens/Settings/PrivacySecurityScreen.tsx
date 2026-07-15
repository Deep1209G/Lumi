/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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

const PrivacySecurityScreen = () => {
  const [settings, setSettings] = useState({
    twoFactor: false,
    biometric: true,
    ads: true,
    analytics: false,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingHorizontal="m">

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
          backgroundColor="white"
          padding="m"
          borderRadius="m"
          borderWidth={2}
          borderColor="gray"
        >
          <Text color="warning" variant="medium">
            Delete account
          </Text>
        </Box>

      </Box>
    </SafeAreaView>
  );
};

export default PrivacySecurityScreen;
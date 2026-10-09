/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Toggle, HeaderBack, Text } from '@src';
import { notificationSettings } from '@src/data/notificationSettings';
import { Theme } from '@src/theme/theme';

const NotificationScreen = () => {
  const theme = useTheme<Theme>();
  const [settings, setSettings] = useState<Record<string, boolean>>({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        {/* Header */}
        <Box>
          <HeaderBack title="Notification" />
        </Box>
        {/* Push subtitle */}
        <Text variant="medium" marginTop="m">
          PUSH NOTIFICATION
        </Text>
        {/* Toggles */}
        <Box marginTop="m">
          {notificationSettings.map(item => (
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
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default NotificationScreen;

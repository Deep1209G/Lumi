/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import { FlatList } from 'react-native';
import { Box, Toggle, HeaderBack, Text } from '@src';
import { notificationSettings } from '@src/data/notificationSettings';

const NotificationScreen = () => {

  const [settings, setSettings] = useState<Record<string, boolean>>({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
  });

  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>
      <Box>
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
          <FlatList
            data={notificationSettings}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Toggle
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
            )}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default NotificationScreen;

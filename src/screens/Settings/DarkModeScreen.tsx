/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, ThemeCard } from '@src';

const DarkModeScreen = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title="Modes" />
        </Box>

        {/* Section Title */}
        <Box marginTop="l">
          <ThemeCard
            title="Light Mode"
            icon="sunny-outline"
            selected={selectedTheme === 'light'}
            onPress={() => setSelectedTheme('light')}
          />

          <ThemeCard
            title="Dark Mode"
            icon="moon-outline"
            selected={selectedTheme === 'dark'}
            onPress={() => setSelectedTheme('dark')}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default DarkModeScreen;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box, HeaderBack, ThemeCard, Text } from '@src';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme/theme';
import { useThemeMode } from '@src/context/ThemeModeContext';
import { DeviceHelper } from '@src/utils';

const DarkModeScreen = () => {
  const theme = useTheme<Theme>();
  const { mode, setMode } = useThemeMode();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        <HeaderBack title="Appearance" />

        {/* Live Preview */}
        <Box marginTop="l">
          <Text variant="small" color="textSecondary" marginBottom="s">Preview</Text>

          <Box borderRadius="l" overflow="hidden" borderWidth={1} borderColor="tabgray" backgroundColor="white">

            {/* Always-dark header strip */}
            <Box
              paddingHorizontal="m"
              paddingTop="m"
              paddingBottom="l"
              backgroundColor="darkHeader"
            >
              <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="s">
                <Box>
                  <Text variant="small" style={{ color: theme.colors.textOnDarkMuted, fontSize: DeviceHelper.calWidth(10) }}>
                    Hello, welcome
                  </Text>
                  <Text variant="medium" style={{ color: theme.colors.white, fontWeight: '700', fontSize: DeviceHelper.calWidth(13) }}>
                    John 👋
                  </Text>
                </Box>
                <Box
                  height={DeviceHelper.calHeight(32)}
                  width={DeviceHelper.calWidth(32)}
                  borderRadius="s"
                  justifyContent="center"
                  alignItems="center"
                  style={{ borderWidth: 1.5, borderColor: theme.colors.primary, backgroundColor: theme.colors.primaryTint }}
                >
                  <Text variant="small" style={{ color: theme.colors.primary, fontWeight: '700' }}>D</Text>
                </Box>
              </Box>

              {/* Mini search bar */}
              <Box
                height={DeviceHelper.calHeight(30)}
                borderRadius="m"
                flexDirection="row"
                alignItems="center"
                paddingHorizontal="s"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <Ionicons name="search-outline" size={DeviceHelper.calWidth(12)} color={theme.colors.textOnDarkMuted} />
                <View style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.15)', marginLeft: 6 }} />
                <Box
                  height={DeviceHelper.calHeight(20)}
                  width={DeviceHelper.calWidth(20)}
                  borderRadius="xs"
                  backgroundColor="primary"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Ionicons name="options-outline" size={DeviceHelper.calWidth(10)} color={theme.colors.white} />
                </Box>
              </Box>
            </Box>

            {/* Body — mainBackground token adapts automatically */}
            <Box
              paddingHorizontal="m"
              paddingTop="m"
              paddingBottom="m"
              backgroundColor="mainBackground"
              style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -12 }}
            >
              <Box flexDirection="row" style={{ gap: 8 }}>
                {[1, 2].map(i => (
                  <Box
                    key={i}
                    flex={1}
                    height={DeviceHelper.calHeight(70)}
                    borderRadius="m"
                    borderWidth={1}
                    backgroundColor="white"
                    borderColor="tabgray"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Options */}
        <Box marginTop="l">
          <Text variant="small" color="textSecondary" marginBottom="s">Choose theme</Text>

          <ThemeCard
            title="Light"
            subtitle="Always use light mode"
            icon="sunny-outline"
            iconBgColor="#fffbeb"
            iconColor="#f59e0b"
            selected={mode === 'light'}
            onPress={() => setMode('light')}
          />

          <ThemeCard
            title="Dark"
            subtitle="Always use dark mode"
            icon="moon-outline"
            iconBgColor={theme.colors.darkHeaderLight}
            iconColor={theme.colors.border}
            selected={mode === 'dark'}
            onPress={() => setMode('dark')}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default DarkModeScreen;

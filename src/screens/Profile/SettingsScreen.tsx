/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack } from '@src';
import { settingMenu } from '@src/data/settingMenu';
import useSetting from '../../hooks/useSetting';
import SettingCard from '../../components/settingScreen/SettingCard';
import theme from '@src/theme/theme';

const SettingsScreen = () => {
  const { t } = useTranslation();
  const { handleMenuPress } = useSetting();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title={t('settings')} />
        </Box>

        {/*Card*/}
        <Box marginTop="m">
          {settingMenu.map(item => (
            <Box key={item.id} marginTop="m">
              <SettingCard
                title={t(item.title)}
                onPress={() => handleMenuPress(item.id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default SettingsScreen;

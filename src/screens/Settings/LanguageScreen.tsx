/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import i18n from '@src/localization/i18n';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@shopify/restyle';
import { saveLanguage, getLanguage } from '@src/utils/languageStorage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, LanguageCard } from '@src';
import { languages } from '@src/data/languages';
import { Theme } from '@src/theme/theme';

const LanguageScreen = () => {
  const theme = useTheme<Theme>();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t } = useTranslation();

  useEffect(() => {
    const loadLanguage = async () => {
      const language = await getLanguage();
      setSelectedLanguage(language);
    };

    loadLanguage();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        <HeaderBack title={t('language')} />

        <Box marginTop="l">
          {languages.map(item => (
            <LanguageCard
              key={item.id}
              title={item.name}
              selected={selectedLanguage === item.id}
              onPress={async () => {
                setSelectedLanguage(item.id);

                // Change app language
                await i18n.changeLanguage(item.id);

                // Save selected language
                await saveLanguage(item.id);
              }}
            />
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default LanguageScreen;

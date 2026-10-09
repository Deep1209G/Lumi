/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack } from '@src';
import { ContactCard } from '@src/components/contactScreen';
import { contactInfo } from '@src/data/contactInfo';
import { Theme } from '@src/theme/theme';

const ContactUsScreen = () => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title={t('contactUs')} />
        </Box>

        {/*Card */}
        <Box marginTop="m">
          {contactInfo.map(item => (
            <Box key={item.id} marginTop="m">
              <ContactCard
                icon={item.icon}
                label={t(item.label)}
                value={item.value}
                onPress={() => handlePress(item.url)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

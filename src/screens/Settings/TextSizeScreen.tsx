/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HeaderBack, ThemeCard } from '@src';
import theme from '@src/theme/theme';

type TextSize = 'small' | 'medium' | 'large';

const TextSizeScreen = () => {
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState<TextSize>('medium');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading Section */}
        <Box>
          <HeaderBack title={t('textSize')} />
        </Box>

        {/* Section Title */}
        <Box marginTop="l">
          <ThemeCard
            title={t('small')}
            icon="text-outline"
            selected={selectedSize === 'small'}
            onPress={() => setSelectedSize('small')}
          />

          <ThemeCard
            title={t('medium')}
            icon="text-outline"
            selected={selectedSize === 'medium'}
            onPress={() => setSelectedSize('medium')}
          />

          <ThemeCard
            title={t('large')}
            icon="text-outline"
            selected={selectedSize === 'large'}
            onPress={() => setSelectedSize('large')}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default TextSizeScreen;

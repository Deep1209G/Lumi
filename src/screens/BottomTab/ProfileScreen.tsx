/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import { Box, EmptyStateCard, ProfileHeader, Text } from '@src';
import useProfile from '../../hooks/useProfile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileMenu } from '@src/data/profileMenu';
import theme from '@src/theme/theme';

const ProfileScreen = () => {
  const { handleMenuPress } = useProfile();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
        {/*Heading */}
        <Text variant="heading">{t('profile')}</Text>
        {/*Header*/}
        <Box marginTop="m">
          <ProfileHeader />
        </Box>

        {/*Card*/}
        <Box marginTop="m">
          {profileMenu.map(item => (
            <Box key={item.id} marginTop="m">
              <EmptyStateCard
                title={t(item.title)}
                leftIcon={item.leftIcon}
                backgroundColor={item.backgroundColor}
                color={item.color}
                onPress={() => handleMenuPress(item.id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ProfileScreen;

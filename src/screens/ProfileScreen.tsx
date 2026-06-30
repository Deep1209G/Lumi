/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, CustomButton, EmptyStateCard, ProfileHeader, Text } from '@src';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/theme';

const ProfileScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');

    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">
        {/*Heading */}
        <Text variant="heading">Profile</Text>

        {/*Header*/}
        <Box marginTop='m'> 
          <ProfileHeader />
        </Box>

         {/*Card*/}
        <Box marginTop='m'> 
          <EmptyStateCard 
          title='My Order'
          lefticon='bag-outline'
          color={theme.colors.black}
          />
        </Box>

        <Box marginTop='m'>
        <CustomButton title="Logout" onPress={handleLogout} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ProfileScreen;

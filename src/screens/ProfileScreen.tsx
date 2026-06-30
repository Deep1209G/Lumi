/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, EmptyStateCard, ProfileHeader, Text } from '@src';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileMenu } from '@src/data/profileMenu';

const ProfileScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');

    navigation.replace('Login');
  };

  const handleMenuPress = (id: string) => {
    switch (id) {
      case 'orders':
        console.log('Orders');
        break;

      case 'wishlist':
        navigation.navigate('WishList');
        break;

      case 'address':
        console.log('Shipping Address');
        break;

      case 'payment':
        console.log('Payment Methods');
        break;

      case 'settings':
        console.log('Settings');
        break;

      case 'logout':
        handleLogout();
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">
        {/*Heading */}
        <Text variant="heading">Profile</Text>

        {/*Header*/}
        <Box marginTop="m">
          <ProfileHeader />
        </Box>

        {/*Card*/}
        <Box marginTop="xl">
          {profileMenu.map((item) => (
            <Box key={item.id} marginTop='m'>
              <EmptyStateCard
                title={item.title}
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

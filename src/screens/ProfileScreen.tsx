import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, CustomButton } from '@src';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';




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
    <Box marginTop="m">
      <CustomButton title="Logout" onPress={handleLogout} />
    </Box>
  );
};

export default ProfileScreen;

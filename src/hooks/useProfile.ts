import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';



const useProfile = () => {

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
 return {
    handleMenuPress,
  };
};

export default useProfile;
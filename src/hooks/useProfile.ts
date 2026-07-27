import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../navigation/AppNavigation';
import { getAuth, signOut } from '@react-native-firebase/auth';


const useProfile = () => {

  type NavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NavigationProp>();


  const handleLogout = async () => {
    try {

      const auth = getAuth();


      // Logout Google/Firebase user
      if (auth.currentUser) {
        await signOut(auth);
      }


      // Logout Dummy JSON user
      await AsyncStorage.removeItem('token');

      await AsyncStorage.removeItem(
        'isLoggedIn',
      );

      await AsyncStorage.removeItem(
        'currentUser',
      );


      navigation.replace('Login');


    } catch (error) {

      console.log(
        'Logout Error:',
        error,
      );

    }
  };


  const handleMenuPress = (id: string) => {

    switch (id) {

      case 'orders':
        navigation.navigate('MyOrder');
        break;


      case 'address':
        navigation.navigate('Address');
        break;


      case 'payment':
        navigation.navigate('PaymentMethod');
        break;


      case 'settings':
        navigation.navigate('Setting');
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

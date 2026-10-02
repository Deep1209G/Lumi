import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

const useSetting = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const handleMenuPress = (id: string) => {
    switch (id) {
      case 'notification':
        navigation.navigate('Notification');
        break;

      case 'language':
        navigation.navigate('Language');
        break;

      case 'mode':
        navigation.navigate('Mode');
        break;

      case 'textSize':
        navigation.navigate('TextSize');
        break;

      case 'privacy':
        navigation.navigate('PrivacySecurity');
        break;

      case 'help':
        navigation.navigate('Help');
        break;

      case 'contact':
        navigation.navigate('Contact');
        break;

      case 'about':
        navigation.navigate('About');
        break;

      default:
        break;
    }
  };
  return {
    handleMenuPress,
  };
};

export default useSetting;

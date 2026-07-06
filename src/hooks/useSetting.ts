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

      case 'privacy':
        navigation.navigate('Privacy');
        break;

      case 'help':
        navigation.navigate('Help');
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

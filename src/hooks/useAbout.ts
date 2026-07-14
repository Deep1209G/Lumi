import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

const useAbout = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const handleMenuPress = (id: string) => {
    switch (id) {
      case 'Term':
        navigation.navigate('Term')
    
        break;
      case 'Privacy':
        navigation.navigate('Privacy')
        break;
      case 'licenses':
        navigation.navigate('Licenses')
        break;
      case 'Rate':
        navigation.navigate('Rate')
        break;
    }
  };
  return {
    handleMenuPress,
  };
};

export default useAbout;

import theme from '@src/theme/theme';
import { Theme } from '@src/theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';


type ProfileMenuItem = {
  id: string;
  title: string;
  leftIcon: keyof typeof Ionicons.glyphMap;
  backgroundColor?: keyof Theme['colors'];
  color?: string;
};
export const profileMenu: ProfileMenuItem[] = [
  {
    id: 'orders',
    title: 'myOrders',
    leftIcon: 'cube-outline',
  },
  {
    id: 'address',
    title: 'shippingAddress',
    leftIcon: 'location-outline',
  },
  {
    id: 'payment',
    title: 'paymentMethods',
    leftIcon: 'card-outline',
  },
  {
    id: 'settings',
    title: 'settings',
    leftIcon: 'settings-outline',
  },
  {
    id: 'logout',
    title: 'logout',
    leftIcon: 'log-out-outline',
    backgroundColor: 'lightRed',
    color: theme.colors.warning,
  },
];
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
    title: 'My Order',
    leftIcon: 'cube-outline',
  },
  {
    id: 'wishlist',
    title: 'Wishlist',
    leftIcon: 'heart-outline',
  },
  {
    id: 'address',
    title: 'Shipping Address',
    leftIcon: 'location-outline',
  },
  {
    id: 'payment',
    title: 'Payment Methods',
    leftIcon: 'card-outline',
  },
  {
    id: 'settings',
    title: 'Settings',
    leftIcon: 'settings-outline',
  },
  {
    id: 'logout',
    title: 'Log Out',
    leftIcon: 'log-out-outline',
    backgroundColor: 'lightRed',
    color: theme.colors.warning,
  },
];
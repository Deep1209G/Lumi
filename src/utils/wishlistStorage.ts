import AsyncStorage from '@react-native-async-storage/async-storage';

const WISHLIST_KEY = 'wishlist';

export const saveWishlist = async (wishlist: string[]) => {
  await AsyncStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(wishlist),
  );
};

export const getWishlist = async () => {
  const data = await AsyncStorage.getItem(WISHLIST_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};
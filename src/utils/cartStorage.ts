import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '@src/context/CardContext';

const CART_KEY = 'cart';

export const saveCart = async (cart: CartItem[]) => {
  try {
    console.log('Saving Cart:', cart);

    await AsyncStorage.setItem(
      CART_KEY,
      JSON.stringify(cart),
    );
  } catch (error) {
    console.log('Save Cart Error', error);
  }
};

export const getCart = async (): Promise<CartItem[]> => {
  try {
    const data = await AsyncStorage.getItem(CART_KEY);

    console.log('Loaded Cart:', data);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.log('Get Cart Error', error);
    return [];
  }
};

export const clearCartStorage = async () => {
  try {
    await AsyncStorage.removeItem(CART_KEY);
  } catch (error) {
    console.log('Clear Cart Error', error);
  }
};
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '@src/context/CardContext';

const getCartKey = (userId: string) => {
  return `cart_${userId}`;
};


// Save cart
export const saveCart = async (
  userId: string,
  cart: CartItem[],
) => {
  try {
    const CART_KEY = getCartKey(userId);

    await AsyncStorage.setItem(
      CART_KEY,
      JSON.stringify(cart),
    );

  } catch (error) {
    console.log('Save Cart Error', error);
  }
};


// Get cart
export const getCart = async (
  userId: string,
): Promise<CartItem[]> => {

  try {

    const CART_KEY = getCartKey(userId);

    const data = await AsyncStorage.getItem(
      CART_KEY,
    );

    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.log('Get Cart Error', error);
    return [];

  }
};


// Clear cart
export const clearCartStorage = async (
  userId: string,
) => {

  try {

    const CART_KEY = getCartKey(userId);

    await AsyncStorage.removeItem(
      CART_KEY,
    );

  } catch (error) {

    console.log('Clear Cart Error', error);

  }
};
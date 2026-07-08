import AsyncStorage from '@react-native-async-storage/async-storage';

export type Address = {
  fullName: string;
  address: string;
};

const ADDRESS_KEY = 'shippingAddress';

export const saveAddress = async (address: Address) => {
  await AsyncStorage.setItem(
    ADDRESS_KEY,
    JSON.stringify(address),
  );
};

export const getAddress = async (): Promise<Address | null> => {
  const data = await AsyncStorage.getItem(ADDRESS_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};
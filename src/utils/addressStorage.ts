import AsyncStorage from '@react-native-async-storage/async-storage';


export type Address = {
  id: string;
  fullName: string;
  phone: string;
  pincode: string;
  house: string;
  area: string;
  city: string;
  state: string;
  type: 'Home' | 'Work' | 'Other';
};


const getAddressKey = (userId: string) => {
  return `shippingAddresses_${userId}`;
};


const getSelectedAddressKey = (userId: string) => {
  return `selectedAddressId_${userId}`;
};



// Get all addresses
export const getAddresses = async (
  userId: string,
): Promise<Address[]> => {

  const ADDRESS_KEY = getAddressKey(userId);

  const data = await AsyncStorage.getItem(
    ADDRESS_KEY,
  );


  if (!data) {
    return [];
  }


  return JSON.parse(data);
};



// Save address
export const saveAddress = async (
  userId: string,
  address: Address,
) => {

  const ADDRESS_KEY = getAddressKey(userId);


  const addresses = await getAddresses(
    userId,
  );


  const existingAddress = addresses.find(
    item => item.id === address.id,
  );


  let updatedAddresses;


  if (existingAddress) {

    updatedAddresses = addresses.map(item =>
      item.id === address.id
        ? address
        : item,
    );

  } else {

    updatedAddresses = [
      ...addresses,
      address,
    ];

  }


  await AsyncStorage.setItem(
    ADDRESS_KEY,
    JSON.stringify(updatedAddresses),
  );

};



// Delete address
export const deleteAddress = async (
  userId: string,
  id: string,
) => {

  const ADDRESS_KEY = getAddressKey(userId);


  const addresses = await getAddresses(
    userId,
  );


  const updatedAddresses =
    addresses.filter(
      item => item.id !== id,
    );


  await AsyncStorage.setItem(
    ADDRESS_KEY,
    JSON.stringify(updatedAddresses),
  );

};



// Save selected address
export const saveSelectedAddress = async (
  userId: string,
  id: string,
) => {

  const SELECTED_ADDRESS_KEY =
    getSelectedAddressKey(userId);


  await AsyncStorage.setItem(
    SELECTED_ADDRESS_KEY,
    id,
  );

};



// Get selected address
export const getSelectedAddress = async (
  userId: string,
): Promise<string | null> => {

  const SELECTED_ADDRESS_KEY =
    getSelectedAddressKey(userId);


  return await AsyncStorage.getItem(
    SELECTED_ADDRESS_KEY,
  );

};
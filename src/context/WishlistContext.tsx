import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WISHLIST_KEY = 'wishlist';

type WishlistContextType = {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
};

type WishlistProviderProps = {
  children: React.ReactNode;
};

export const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggleWishlist: () => {},
});

export const WishlistProvider = ({
  children,
}: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist when app starts
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const data = await AsyncStorage.getItem(WISHLIST_KEY);

        if (data) {
          setWishlist(JSON.parse(data));
        }
      } catch (error) {
        console.log('Error loading wishlist:', error);
      }
    };

    loadWishlist();
  }, []);

  // Toggle wishlist
  const toggleWishlist = async (id: string) => {
    try {
      let updatedWishlist: string[];

      if (wishlist.includes(id)) {
        updatedWishlist = wishlist.filter(item => item !== id);
      } else {
        updatedWishlist = [...wishlist, id];
      }

      setWishlist(updatedWishlist);

      await AsyncStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(updatedWishlist),
      );
    } catch (error) {
      console.log('Error saving wishlist:', error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
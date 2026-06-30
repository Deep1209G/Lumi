import React, { createContext, useState } from 'react';

type WishlistContextType = {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
};

type WishlistProviderProps = { children: React.ReactNode };

export const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggleWishlist: () => {},
});

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const toggleWishlist = (id: string) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {' '}
      {children}{' '}
    </WishlistContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from 'react';
import { saveCart, getCart, clearCartStorage } from '@src/utils/cartStorage';

export type CartItem = {
  product: any;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: any, quantity: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => Promise<void>;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart when app starts
  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await getCart();
      setCart(storedCart);
    };

    loadCart();
  }, []);

  // Save cart whenever cart changes
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // Add to Cart
  const addToCart = (product: any, quantity: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  // Remove Item
  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id: string) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: string) => {
    setCart(prev =>
      prev.flatMap(item => {
        if (item.product.id !== id) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }),
    );
  };

  // Clear Cart
  const clearCart = async () => {
    setCart([]);
    await clearCartStorage();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

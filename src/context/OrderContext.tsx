import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from './CardContext';

export type Order = {
  id: string;
  date: string;
  status: string;
  total: number;
  item: CartItem;
};

type OrderContextType = {
  orders: Order[];
 addOrder: (cart: CartItem[]) => Promise<void>;
};

export const OrderContext = createContext({} as OrderContextType);

type Props = {
  children: React.ReactNode;
};

export const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const loadOrders = async () => {
    const data = await AsyncStorage.getItem('orders');

    if (data) {
      setOrders(JSON.parse(data));
    }
  };

const addOrder = async (cart: CartItem[]) => {
    const newOrders: Order[] = cart.map(item => ({
      id: `ORD${Date.now()}-${item.product.id}`,
      date: new Date().toLocaleDateString(),
      status: 'Processing',
      total: item.product.price * item.quantity,
      item,
    }));

    setOrders(prev => [...newOrders, ...prev]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

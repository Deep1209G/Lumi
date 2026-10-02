import React, { createContext, useCallback, useEffect, useState } from 'react';
import { CartItem } from './CardContext';
import { getOrders } from '@src/services/order.service';

export type Order = {
  _id: string;
  status: string;
  total: number;

  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: any;
  }[];

  payment?: {
    paymentMethod: string;
    razorpayPaymentId?: string;
    razorpayOrderId?: string;
    razorpaySignature?: string;
    paymentStatus: string;
  };

  createdAt: string;
  updatedAt: string;
};

type OrderContextType = {
  orders: Order[];
  loadOrders: () => Promise<void>;
  addOrder: (cart: CartItem[], payment?: Order['payment']) => Promise<void>;
};

export const OrderContext = createContext({} as OrderContextType);

type Props = {
  children: React.ReactNode;
};

export const OrderProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = useCallback(async () => {
    try {
      const data = await getOrders();

      console.log('MY ORDERS DATA:', data);

      setOrders(data || []);
    } catch (error) {
      console.log('Load Orders Error:', error);
    }
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const addOrder = async (cart: CartItem[], payment?: Order['payment']) => {
    // Orders are now created in backend after Razorpay verification.
    // This function is kept for compatibility.

    const newOrders: Order[] = cart.map(item => ({
      _id: `LOCAL-${Date.now()}-${item.product.id}`,
      status: 'Processing',
      total: item.product.price * item.quantity,

      items: [
        {
          productId: item.product.id.toString(),
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.image,
        },
      ],

      payment,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    setOrders(prev => [...newOrders, ...prev]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loadOrders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

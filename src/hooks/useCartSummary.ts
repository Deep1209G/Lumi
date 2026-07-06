import { useMemo } from 'react';
import { CartItem } from '@src/context/CardContext'; // adjust the import

const GST_RATE = 0.01;
const SHIPPING_CHARGE = 99;
const FREE_SHIPPING_LIMIT = 1000;

const useCartSummary = (cart: CartItem[]) => {
  return useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    const totalItems = cart.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );

    const gst = subtotal * GST_RATE;

    const shipping =
      subtotal >= FREE_SHIPPING_LIMIT || subtotal === 0
        ? 0
        : SHIPPING_CHARGE;

    const total = subtotal + gst + shipping;

    return {
      totalItems,
      subtotal,
      gst,
      shipping,
      total,
    };
  }, [cart]);
};

export default useCartSummary;
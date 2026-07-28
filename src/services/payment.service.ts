const API_URL = 'http://10.0.2.2:5000';

export const createPaymentOrder = async (amount: number) => {
  try {
    const response = await fetch(`${API_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const data = await response.json();

    console.log("Backend response:", data);
    console.log("Status:", response.status);

    return data;

  } catch (error) {
    console.log("Network error:", error);
    throw error;
  }
};

export const verifyPayment = async (paymentData: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) => {
  const response = await fetch(
    `${API_URL}/api/payment/verify-payment`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    },
  );

  const data = await response.json();

  return data;
};
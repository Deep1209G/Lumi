const API_URL = 'http://10.0.2.2:5000';

export const createOrder = async (orderData: any) => {
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    return data;

  } catch (error) {
    console.log('Order API Error:', error);
    throw error;
  }
};


export const getOrders = async () => {
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data.orders;

  } catch (error) {
    console.log('Get Orders API Error:', error);
    throw error;
  }
};
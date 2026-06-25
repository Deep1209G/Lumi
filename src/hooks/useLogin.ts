import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../api/auth';

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);

      const data = await loginUser(username, password);

      await AsyncStorage.setItem('token', data.accessToken);

      await AsyncStorage.setItem('isLoggedIn', 'true');

      await AsyncStorage.setItem('user', JSON.stringify(data));

      return { success: true, data };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};

export default useLogin;

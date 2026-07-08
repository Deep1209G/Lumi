import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Address, getAddress } from '@src/utils/addressStorage';

const useAddress = () => {
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const loadAddress = async () => {
        try {
          setLoading(true);

          const savedAddress = await getAddress();

          if (savedAddress) {
            setAddress(savedAddress);
          }
        } finally {
          setLoading(false);
        }
      };

      loadAddress();
    }, []),
  );

  return {
    address,
    loading,
    setAddress,
  };
};

export default useAddress;
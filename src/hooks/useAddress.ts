import { useCallback, useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
  Address,
  getAddresses,
  getSelectedAddress,
} from '@src/utils/addressStorage';

import { AuthContext } from '@src/context/AuthContext';


const useAddress = () => {

  const [addresses, setAddresses] = useState<Address[]>([]);

  const [selectedAddress, setSelectedAddress] =
    useState<Address | null>(null);

  const [loading, setLoading] = useState(true);


  const { user } = useContext(AuthContext);



  useFocusEffect(
    useCallback(() => {

      const loadAddresses = async () => {

        try {

          setLoading(true);


          if (!user) {
            setAddresses([]);
            setSelectedAddress(null);
            return;
          }


          const savedAddresses =
            await getAddresses(user.id);


          const selectedId =
            await getSelectedAddress(user.id);



          setAddresses(savedAddresses);



          const address =
            savedAddresses.find(
              item => item.id === selectedId,
            ) ??
            savedAddresses[0] ??
            null;



          setSelectedAddress(address);


        } finally {

          setLoading(false);

        }

      };


      loadAddresses();


    }, [user]),
  );



  return {
    addresses,
    selectedAddress,
    loading,
  };

};


export default useAddress;
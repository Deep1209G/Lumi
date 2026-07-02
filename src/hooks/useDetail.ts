import { useContext, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { WishlistContext } from '@src/context/WishlistContext';
import { RootStackParamList } from '../navigation/AppNavigation';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const useDetail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute<DetailRouteProp>();

  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  // Derived values
  const totalPrice = product.price * quantity;
  const isWishlisted = wishlist.includes(product.id);

  // Handlers
  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
  };

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
  };

  return {
    product,
    quantity,
    totalPrice,
    isWishlisted,

    handleIncrease,
    handleDecrease,
    handleGoBack,
    handleWishlist,
    handleAddToCart,
  };
};

export default useDetail;
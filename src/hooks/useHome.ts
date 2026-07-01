import { useContext, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { WishlistContext } from '@src/context/WishlistContext';
import { products } from '@src/data/produts';
import { RootStackParamList } from '../navigation/AppNavigation';

const useHome = () => {
  // Wishlist Context
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // FlatList Reference
  const flatListRef = useRef<FlatList>(null);

  // Selected Category
  const [selectedCategory, setSelectedCategory] =
    useState('All Item');

  // Number of products to display
  const [visibleCount, setVisibleCount] = useState(10);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All Item'
      ? products
      : products.filter(
          item => item.category === selectedCategory,
        );

  // Display only the visible products
  const visibleProducts = filteredProducts.slice(
    0,
    visibleCount,
  );

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(10);
  };

  // Load more products when the user reaches the end
  const handleLoadMore = () => {
    if (visibleCount < filteredProducts.length) {
      setVisibleCount(prev => prev + 10);
    }
  };

  // Return values and functions
  return {
    navigation,
    flatListRef,
    wishlist,
    toggleWishlist,
    selectedCategory,
    visibleProducts,
    handleCategoryChange,
    handleLoadMore,
  };
};

export default useHome;
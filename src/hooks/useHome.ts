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
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Number of products to display
  const [visibleCount, setVisibleCount] = useState(10);

  //Shuffle products to display in random order
  const [shuffledProducts] = useState(() => {
    const items = [...products];

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  });

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'all'
      ? shuffledProducts
      : shuffledProducts.filter(item => item.category === selectedCategory);

  // Display only the visible products
  const visibleProducts = filteredProducts.slice(0, visibleCount);

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

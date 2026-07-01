/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useContext } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { products } from '@src/data/produts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { WishlistContext } from '@src/context/WishlistContext';

import {
  Box,
  Header,
  SearchBar,
  CategoryTab,
  BannerSlider ,
  Text,
  PressableText,
  Card,
} from '@src';

const HomeScreen = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Item');
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredProducts =
    selectedCategory === 'All Item'
      ? products
      : products.filter(item => item.category === selectedCategory);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    console.log(category);
    setSelectedCategory(category);
    setVisibleCount(10);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        key={selectedCategory}
        ref={flatListRef}
        data={visibleProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}
        ListHeaderComponent={
          <>
            {/* Header */}
            <Box padding="l">
              <Header />

              {/* Search Bar */}
              <Box marginTop="m">
                <SearchBar
                  editable={false}
                  onSearchPress={() => navigation.navigate('Search')}
                  rightIcon="options-outline"
                  onPress={() => console.log('option button click')}
                />
              </Box>

              {/* Category Tab */}
              <Box marginTop="m">
                <CategoryTab
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </Box>

              {/* Offer Banner */}
              <Box marginTop="m">
                <BannerSlider />
              </Box>

              {/* Popular Text */}
              <Box marginTop="m" flexDirection="row" alignItems="center">
                <Box flex={1}>
                  <Text variant="subtitle">Popular Now</Text>
                </Box>

                <PressableText
                  text="See all"
                  onPress={() => console.log('see all item')}
                />
              </Box>
            </Box>
          </>
        }
        onEndReached={() => {
          if (visibleCount < filteredProducts.length) {
            setVisibleCount(prev => prev + 10);
          }
        }}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            price={item.price}
            rating={item.rating}
            liked={wishlist.includes(item.id)}
            onWishlistPress={() => toggleWishlist(item.id)}
            onCardPress={() => navigation.navigate('Detail')}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

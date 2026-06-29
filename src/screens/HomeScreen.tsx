/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native';
import { products } from '@src/data/produts';
import {
  Box,
  Header,
  SearchBar,
  CategoryTab,
  BannerCard,
  Text,
  PressableText,
  Card,
} from '@src';

const HomeScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Item');
  const filteredProducts =
    selectedCategory === 'All Item'
      ? products
      : products.filter(item => item.category === selectedCategory);
  const [visibleCount, setVisibleCount] = useState(10);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    console.log('Category Changed:', category);
    setSelectedCategory(category);
    setVisibleCount(10);

    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  };
  console.log('Visible Count:', visibleCount);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box padding="l">
          {/*Header */}
          <Header />

          {/*Search Bar */}
          <Box marginTop="m">
            <SearchBar rightIcon="options-outline" onPress={() => console.log('option button click')} />
          </Box>

          {/*Category Tab */}
          <Box marginTop="m">
            <CategoryTab onSelectCategory={handleCategoryChange} />
          </Box>

          {/*Offer Banner*/}
          <Box marginTop="m">
            <BannerCard />
          </Box>

          {/* Popular Text*/}
          <Box marginTop="m" flexDirection="row" alignItems="center">
            <Box flex={1}>
              <Text variant="subtitle">Popular Now</Text>
            </Box>
            <PressableText
              text="See all"
              onPress={() => console.log('see all item')}
            />
          </Box>

          {/* Card */}

          <Box marginTop="m">
            <FlatList
              key={selectedCategory}
              ref={flatListRef}
              data={visibleProducts}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'space-around',
                marginBottom: 16,
              }}
              keyExtractor={item => item.id}
              onEndReached={() => {
                console.log('onEndReached');
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
                />
              )}
            />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

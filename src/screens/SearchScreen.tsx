/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  Box,
  SearchBar,
  Text,
  Card,
} from '@src';
import { products } from '@src/data/produts';
import { WishlistContext } from '@src/context/WishlistContext';

const SearchScreen = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // Search Text
  const [searchText, setSearchText] = useState('');

  // Controls whether suggestions are visible
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter products according to search text
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Suggestions (Only first 5)
  const suggestions = products
    .filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    .slice(0, 5);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box padding="l">

          {/* Heading */}
          <Text variant="heading">Search</Text>

          {/* Search Bar */}
          <Box marginTop="m">
            <SearchBar
              editable
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                setShowSuggestions(true);
              }}
            />
          </Box>

          {/* Suggestions */}
          {showSuggestions && searchText.length > 0 && (
            <Box
              backgroundColor="mainBackground"
              borderRadius="m"
              marginTop="s"
              paddingVertical="s"
            >
              <FlatList
                data={suggestions}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      setSearchText(item.name);
                      setShowSuggestions(false);
                    }}
                  >
                    <Box
                      paddingVertical="s"
                      paddingHorizontal="m"
                    >
                      <Text>{item.name}</Text>
                    </Box>
                  </Pressable>
                )}
              />
            </Box>
          )}

          {/* Trending */}
          <Text variant="medium" marginTop="l">
            Trending Searches
          </Text>

          {/* Recommended */}
          <Text variant="medium" marginTop="m">
            Recommended
          </Text>

          {/* Product List */}
          <Box marginTop="m">
            <FlatList
              data={filteredProducts}
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              columnWrapperStyle={{
                justifyContent: 'space-around',
                marginBottom: 16,
              }}
              renderItem={({ item }) => (
                <Card
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  liked={wishlist.includes(item.id)}
                  onWishlistPress={() =>
                    toggleWishlist(item.id)
                  }
                />
              )}
            />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
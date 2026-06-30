/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView, Pressable } from 'react-native';
import { Box, SearchBar, Text, Card, useSearch } from '@src';
import { WishlistContext } from '@src/context/WishlistContext';

const SearchScreen = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const {
    searchText,
    showSuggestions,
    filteredProducts,
    suggestions,
    handleSearch,
    handleSuggestionPress,
  } = useSearch();

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
              onChangeText={handleSearch}
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
                    onPress={() => handleSuggestionPress(item.name)}
                  >
                    <Box paddingVertical="s" paddingHorizontal="m">
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
                  onWishlistPress={() => toggleWishlist(item.id)}
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

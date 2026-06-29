/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, SearchBar, Text, Card } from '@src';
import { products } from '@src/data/produts';
import { FlatList, ScrollView } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  console.log(filteredProducts);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Box padding="l">
        {/*Heading */}
        <Text variant="heading">Search</Text>

        {/*Search Bar */}
        <Box marginTop="m">
          <SearchBar
            editable={true}
            value={searchText}
            onChangeText={setSearchText}
          />
        </Box>
        {/*Trending Searches */}
        <Text variant="medium" marginTop="m">
          Trending Searches
        </Text>

        {/*Recommende */}
        <Text variant="medium" marginTop="m">
          Recommended
        </Text>
        <Box marginTop="m">
          <FlatList
            numColumns={2}
            data={filteredProducts}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              marginBottom: 16,
            }}
            renderItem={({ item }) => (
              <Card name={item.name} price={item.price} rating={item.rating} />
            )}
          />
        </Box>
      </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

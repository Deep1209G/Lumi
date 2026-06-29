/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, SearchBar, Text } from '@src';

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">

        {/*Heading */}
        <Text variant="heading">Search</Text>

        {/*Search Bar */}
        <Box marginTop="m">
          <SearchBar />
        </Box>

        {/*Trending Searches */}
        <Text variant="medium"  marginTop="m">Trending Searches</Text>

        {/*Recommende */}
        <Text variant="medium"  marginTop="m">Trending Searches</Text>

      </Box>
    </SafeAreaView>
  );
};

export default SearchScreen;

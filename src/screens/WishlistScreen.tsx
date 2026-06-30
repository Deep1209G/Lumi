/* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { WishlistContext } from '@src/context/WishlistContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text, Card } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme/theme';
import { products } from '@src/data/produts';
import { FlatList } from 'react-native';

const WishlistScreen = () => {
  const { wishlist } = useContext(WishlistContext);
  const wishlistProducts = products.filter(product =>
    wishlist.includes(product.id),
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box padding="l">
        <Text variant="heading">
          My WishList
        </Text>
        {wishlistProducts.length === 0 ? (
          <Box marginTop="xxxl" alignItems="center">
            <Box
              height={60}
              width={60}
              backgroundColor="white"
              borderColor="border"
              borderWidth={2}
              borderRadius="m"
              justifyContent="center"
              alignItems="center"
            >
              <Ionicons
                name="heart-outline"
                size={30}
                color={theme.colors.border}
              />
            </Box>
            <Text marginTop="m" variant="button">
              No Saved Items
            </Text>
            <Text marginTop="s" variant="medium">
              Tap the heart on any product to save it here.
            </Text>
          </Box>
        ) : (
          <Box marginTop='m'>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={wishlistProducts}
            numColumns={2}
            keyExtractor={item => item.id}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                price={item.price}
                rating={item.rating}
                liked={true}
                onWishlistPress={() => {}}
              />
            )}
          />
          </Box>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default WishlistScreen;

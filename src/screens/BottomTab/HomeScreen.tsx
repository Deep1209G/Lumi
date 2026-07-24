/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import useHome from '../../hooks/useHome';

import {
  Box,
  Header,
  SearchBar,
  CategoryTab,
  BannerSlider,
  Text,
  PressableText,
  Card,
} from '@src';
import theme from '@src/theme/theme';

const HomeScreen = () => {
 
  const { t } = useTranslation();
  const {
    navigation,
    flatListRef,
    wishlist,
    toggleWishlist,
    selectedCategory,
    visibleProducts,
    handleCategoryChange,
    handleLoadMore,
  } = useHome();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
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
            <Box paddingLeft="l" paddingRight="l">
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
              <Box marginTop="m" flexDirection="row" alignItems="center" marginBottom='m'>
                <Box flex={1}>
                  <Text variant="subtitle"> {t('popularNow')}</Text>
                </Box>

                <PressableText
                  text={t('seeAll')}
                  onPress={() => console.log('see all item')}
                />
              </Box>
            </Box>
          </>
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            liked={wishlist.includes(item.id)}
            onWishlistPress={() => toggleWishlist(item.id)}
            onCardPress={() =>
              navigation.navigate('Detail', {
                product: item,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

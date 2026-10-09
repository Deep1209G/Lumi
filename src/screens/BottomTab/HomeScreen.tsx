/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FlatList, View } from 'react-native';

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
import useHome from '../../hooks/useHome';

const HomeScreen = () => {
  const { t } = useTranslation();
  const tabBarHeight = useBottomTabBarHeight();
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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.darkHeader }}>
      <FlatList
        key={selectedCategory}
        ref={flatListRef}
        data={visibleProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        columnWrapperStyle={{
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}
        ListHeaderComponent={
          <>
            {/* Dark header section */}
            <Box
              paddingLeft="l"
              paddingRight="l"
              paddingTop="m"
              paddingBottom="xl"
              style={{ backgroundColor: theme.colors.darkHeader }}
            >
              <Header />
              <Box marginTop="m">
                <SearchBar
                  editable={false}
                  isDark
                  onSearchPress={() => navigation.navigate('Search')}
                  rightIcon="options-outline"
                  onPress={() => {}}
                />
              </Box>
            </Box>

            {/* Curved light body */}
            <View
              style={{
                backgroundColor: theme.colors.mainBackground,
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                marginTop: -20,
                paddingTop: 20,
                paddingHorizontal: theme.spacing.l,
              }}
            >
              {/* Category Tab */}
              <Box marginBottom="m">
                <CategoryTab
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </Box>

              {/* Offer Banner */}
              <Box marginBottom="m">
                <BannerSlider />
              </Box>

              {/* Popular heading */}
              <Box
                flexDirection="row"
                alignItems="center"
                marginBottom="m"
              >
                <Box flex={1}>
                  <Text variant="subtitle">{t('popularNow')}</Text>
                </Box>
                <PressableText
                  text={t('seeAll')}
                  onPress={() => {}}
                />
              </Box>
            </View>
          </>
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        style={{ backgroundColor: theme.colors.mainBackground }}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            liked={wishlist.includes(item.id)}
            onWishlistPress={() => toggleWishlist(item.id)}
            onCardPress={() =>
              navigation.navigate('Detail', { product: item })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

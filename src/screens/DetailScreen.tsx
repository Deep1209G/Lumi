/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '@src/theme/theme';
import { AddToCartButton, Box, PressableIcon, PressIcon, Text } from '@src';
import useDetail from '../hooks/useDetail.ts';

const DetailScreen = () => {
  const {
    product,
    quantity,
    totalPrice,
    isWishlisted,
    handleIncrease,
    handleDecrease,
    handleGoBack,
    handleWishlist,
    handleAddToCart,
  } = useDetail();
  return (
   <Box flex={1} backgroundColor="white">
      {/* Image Container */}

      <Box height={400}  justifyContent="center" alignItems="center" >
        <Box position="absolute" top={40} left={50} zIndex={1}>
          <PressIcon icon="chevron-back-outline" onPressIcon={handleGoBack} />
        </Box>
        <Box position="absolute" top={40} right={50} zIndex={1}>
          <PressableIcon
            liked={isWishlisted}
            onPress={handleWishlist}
            height={42}
            width={42}
            iconSize={22}
           
          />
        </Box>

        <Image
          source={product.image}
          style={{ width: 350, height: 350, borderRadius: 20 }}
          
          resizeMode="cover"
        />
      </Box>

      {/* Product Details */}
      <Box
        flex={1}
        padding="l"
        backgroundColor="gray"
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
      >
        <Box flexDirection="row" alignItems="center" marginTop="xs">
          <Text variant="heading">{product.name}</Text>

          <Box
            flex={1}
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Ionicons name="star" size={14} color={theme.colors.yellow} />

            <Text variant="rupees" marginLeft="xs">
              {product.rating}
            </Text>
          </Box>
        </Box>

        <Text variant="description" marginTop="s">
          {product.category}
        </Text>

        <Text
          variant="description"
          color="textSecondary"
          marginTop="m"
          textAlign="justify"
        >
          {product.description} Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="l"
        backgroundColor="gray"
        marginBottom="m"
      >
        {/* Quantity Selector */}
        <Box
          flexDirection="row"
          alignItems="center"
          backgroundColor="white"
          borderRadius="xl"
          paddingHorizontal="xs"
          paddingVertical="s"
        >
          <Ionicons name="remove" size={20} onPress={handleDecrease} />

          <Text variant="medium" color="black" marginHorizontal="l">
            {quantity}
          </Text>

          <Ionicons name="add" size={20} onPress={handleIncrease} />
        </Box>

        {/* Add to Cart Button */}
        <Box flex={1} marginLeft="m">
          <AddToCartButton price={totalPrice} onPress={handleAddToCart} />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailScreen;

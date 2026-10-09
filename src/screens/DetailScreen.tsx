/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';
import {
  AddToCartButton,
  Box,
  PressableIcon,
  PressIcon,
  QuantitySelector,
  Text,
} from '@src';
import useDetail from '../hooks/useDetail.ts';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailScreen = () => {
  const theme = useTheme<Theme>();
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
    <SafeAreaView
      style={{ flex: 1,}}
      edges={['top']} // Apply only the top safe area
    >
      <Box flex={1}>
        {/* Image Container */}
        <Box height={DeviceHelper.calHeight(450)} alignItems="center" backgroundColor="white">
          <Box position="absolute" top={DeviceHelper.calHeight(30)} left={DeviceHelper.calWidth(20)} zIndex={1}>
            <PressIcon icon="chevron-back-outline" onPressIcon={handleGoBack} />
          </Box>

          <Box position="absolute" top={DeviceHelper.calHeight(30)} right={DeviceHelper.calWidth(20)} zIndex={1}>
            <PressableIcon
              liked={isWishlisted}
              onPress={handleWishlist}
              height={DeviceHelper.calHeight(42)}
              width={DeviceHelper.calWidth(42)}
              iconSize={DeviceHelper.calWidth(22)}
            />
          </Box>

          <Box
            marginTop="xxl"
            height={DeviceHelper.calHeight(350)}
            width={DeviceHelper.calWidth(350)}
            alignItems="center"
          >
            <Image
              source={product.image}
              style={{ width: DeviceHelper.calWidth(270), height: DeviceHelper.calHeight(350), borderRadius: DeviceHelper.calWidth(20) }}
              resizeMode="cover"
            />
          </Box>
        </Box>

        {/* Product Details */}
        <Box
          flex={1}
          marginTop="n"
          padding="l"
          backgroundColor="tabgray"
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
              <Ionicons name="star" size={DeviceHelper.calWidth(14)} color={theme.colors.yellow} />

              <Text variant="rupees" marginLeft="xs">
                {product.rating}
              </Text>
            </Box>
          </Box>

          <Text variant="description" color='textPrimary' marginTop="s">
            {product.category}
          </Text>

          <Text
            variant="description"
            marginTop="m"
            textAlign="justify"
            color='textPrimary' 
          >
            {product.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
        </Box>

        {/* Bottom Section */}
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="l"
          backgroundColor="tabgray"
          marginBottom="s"
        >
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <Box flex={1} marginLeft="m">
            <AddToCartButton price={totalPrice} onPress={handleAddToCart} />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default DetailScreen;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, QuantitySelector, Text } from '@src';
import theme from '@src/theme/theme';

type CartCardProps = {
  product: any;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
};

const CartCard = ({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartCardProps) => {
  return (
    <Box
      flexDirection="row"
      backgroundColor="white"
      borderRadius="m"
      padding="m"
      marginBottom="m"
      alignItems="center"
      borderWidth={1}
      borderColor="tabgray"
      shadowColor="primary"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.06}
      shadowRadius={8}
      elevation={3}
      height={110}
    >
      {/* Product Image */}
      <Image
        source={product.image}
        style={{
          width: 75,
          height: 80,
          borderRadius: theme.borderRadii.m,
        }}
        resizeMode="cover"
      />

      {/* Product Details */}
      <Box flex={1} marginLeft="m" height="100%" justifyContent="space-between">
        {/* Top Row */}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Text variant="medium" color="black" flex={1} numberOfLines={1}>
            {product.name}
          </Text>

          <Ionicons
            name="close-outline"
            size={22}
            color={theme.colors.warning}
            onPress={onRemove}
          />
        </Box>

        {/* Bottom Row */}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text variant="medium" color="primary">
            ₹{product.price * quantity}
          </Text>

          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            backgroundColor="tabgray"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartCard;

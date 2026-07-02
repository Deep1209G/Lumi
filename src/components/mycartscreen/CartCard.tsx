/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
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
    >
      {/* Product Image */}
      <Image
        source={product.image}
        style={{
          width: 90,
          height: 90,
        }}
        resizeMode="contain"
      />

      {/* Product Details */}
      <Box flex={1} marginLeft="m">
        <Text variant="button">
          {product.name}
        </Text>

        <Text
          variant="description"
          color="textSecondary"
          marginTop="xs"
        >
          {product.category}
        </Text>

        <Text
          variant="subtitle"
          color="green"
          marginTop="xs"
        >
          ₹{product.price * quantity}
        </Text>

        {/* Quantity Selector */}
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="m"
        >
          <Ionicons
            name="remove-circle-outline"
            size={24}
            color={theme.colors.black}
            onPress={onDecrease}
          />

          <Text
            variant="button"
            marginHorizontal="m"
          >
            {quantity}
          </Text>

          <Ionicons
            name="add-circle-outline"
            size={24}
            color={theme.colors.black}
            onPress={onIncrease}
          />
        </Box>
      </Box>

      {/* Remove */}
      <Ionicons
        name="trash-outline"
        size={22}
        color={theme.colors.warning}
        onPress={onRemove}
      />
    </Box>
  );
};

export default CartCard;
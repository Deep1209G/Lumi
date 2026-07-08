/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';

import { Box, Text } from '@src';
import theme from '@src/theme/theme';

type OrderSummaryProps = {
  product: any;
  quantity: number;
};

const OrderSummary = ({
  product,
  quantity,
}: OrderSummaryProps) => {
  return (
    <Box
      flexDirection="row"
      backgroundColor="white"
      borderRadius="m"
      padding="m"
      marginBottom="m"
      alignItems="center"
      borderWidth={1}
      borderColor="border"
      height={80}
    >
      {/* Product Image */}
      <Image
        source={product.image}
        style={{
          width: 60,
          height: 60,
          borderRadius: theme.borderRadii.m,
        }}
        resizeMode="cover"
      />

      {/* Product Details */}
      <Box
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginLeft="m"
      >
        <Box>
          <Text variant="medium" color="textPrimary">
            {product.name}
          </Text>

          <Text variant="small" color="textSecondary">
            Qty: {quantity}
          </Text>
        </Box>

        <Text variant="rupees">
          ₹ {product.price * quantity}
        </Text>
      </Box>
    </Box>
  );
};

export default OrderSummary;
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
      alignItems="center"
      backgroundColor="white"
      borderRadius="l"
      padding="m"
      marginBottom="m"
      borderWidth={1}
      borderColor="tabgray"
      shadowColor="primary"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.06}
      shadowRadius={8}
      elevation={3}
      minHeight={92}
    >
      <Image
        source={product.image}
        style={{
          width: 68,
          height: 68,
          borderRadius: theme.borderRadii.m,
        }}
        resizeMode="cover"
      />

      <Box
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginLeft="m"
      >
        <Box flex={1} marginRight="m">
          <Text
            variant="medium"
            color="textPrimary"
            numberOfLines={1}
          >
            {product.name}
          </Text>

          <Text
            marginTop="xs"
            variant="small"
            color="textSecondary"
          >
            Qty: {quantity}
          </Text>
        </Box>

        <Text variant="rupees" color="primary">
          ₹ {product.price * quantity}
        </Text>
      </Box>
    </Box>
  );
};

export default OrderSummary;
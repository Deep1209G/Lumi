/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@shopify/restyle';
import { Box, QuantitySelector, Text } from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

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
  const theme = useTheme<Theme>();
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
      height={DeviceHelper.calHeight(110)}
    >
      {/* Product Image */}
      <Image
        source={product.image}
        style={{
          width: DeviceHelper.calWidth(75),
          height: DeviceHelper.calHeight(80),
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
            size={DeviceHelper.calWidth(22)}
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

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text, PressableIcon } from '@src';
import theme from '@src/theme/theme';

type Props = {
  image?: ImageSourcePropType;
  name: string;
  price: number;
  rating: number;
  liked: boolean;
  onWishlistPress: () => void;
  onCardPress: () => void;
};

const Card = ({
  image,
  name,
  price,
  rating,
  liked,
  onWishlistPress,
  onCardPress,
}: Props) => {
  return (
    <Pressable onPress={onCardPress}>
      <Box width={165}>
        {/* Product Image */}
        <Box height={170} borderRadius="m" overflow="hidden">
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />

          {/* Heart Icon */}
          <Box
            position="absolute"
            top={8}
            right={8}
          >
            <PressableIcon
              liked={liked}
              onPress={onWishlistPress}
            />
          </Box>
        </Box>

        {/* Product Name */}
        <Text
          marginTop="s"
          variant="medium"
          color="black"
          numberOfLines={1}
        >
          {name}
        </Text>

        {/* Price & Rating */}
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="xs"
        >
          <Text variant="rupees">₹{price}</Text>

          <Text
            variant="medium"
            paddingLeft="xs"
            color="icon"
            textDecorationLine="line-through"
          >
            ₹1800
          </Text>

          <Box
            flex={1}
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Ionicons
              name="star"
              size={14}
              color={theme.colors.yellow}
            />

            <Text variant="rupees" marginLeft="xs">
              {rating}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default Card;
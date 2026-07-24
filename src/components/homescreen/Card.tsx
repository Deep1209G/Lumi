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
      <Box
        width={165}
        backgroundColor="white"
        borderWidth={1}
        borderColor="border"
        padding="s"
        borderRadius="m"
        shadowColor="black"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.15}
        shadowRadius={20}
        elevation={3}
      >
        {/* Product Image */}
        <Box alignItems="center">
          <Box height={165} width={130} borderRadius="m" marginTop="s">
            <Image
              source={image}
              style={{
                width: 130,
                height: 165,
                borderRadius: 16,
              }}
              resizeMode="cover"
            />

            {/* Heart Icon */}
            <Box position="absolute" top={8} right={8}>
              <PressableIcon liked={liked} onPress={onWishlistPress} />
            </Box>
          </Box>
        </Box>

        {/* Product Name */}
        <Text marginTop="m" variant="medium" color="black" numberOfLines={1}>
          {name}
        </Text>

        {/* Price & Rating */}
        <Box flexDirection="row" alignItems="center" marginTop="xs">
          <Text variant="rupees" color='primary'>₹{price}</Text>

          <Text
            variant="medium"
            marginLeft="xs"
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
            <Ionicons name="star" size={14} color={theme.colors.yellow} />

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

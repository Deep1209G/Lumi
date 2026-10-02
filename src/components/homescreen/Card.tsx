/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text, PressableIcon } from '@src';
import theme from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

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
        width={DeviceHelper.calWidth(165)}
        backgroundColor="white"
        borderWidth={1.5}
        borderColor="tabgray"
        padding="s"
        borderRadius="m"
        shadowColor="primary"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.15}
        shadowRadius={20}
        elevation={5}
      >
        {/* Product Image */}
        <Box alignItems="center">
          <Box height={DeviceHelper.calHeight(165)} width={DeviceHelper.calWidth(130)} borderRadius="m" marginTop="s">
            <Image
              source={image}
              style={{
                width: DeviceHelper.calWidth(130),
                height: DeviceHelper.calHeight(165),
                borderRadius: DeviceHelper.calWidth(16),
              }}
              resizeMode="cover"
            />

            {/* Heart Icon */}
            <Box position="absolute" top={DeviceHelper.calHeight(8)} right={DeviceHelper.calWidth(8)}>
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
            <Ionicons name="star" size={DeviceHelper.calWidth(14)} color={theme.colors.yellow} />

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

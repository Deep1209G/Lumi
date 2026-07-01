import React from 'react';
import { Box, Text, PressableIcon } from '@src';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type CardProps = {
  name: string;
  price: number;
  rating: number;
  liked?: boolean;
  onWishlistPress?: () => void;
  onCardPress?: () => void;
};

const Card = ({
  name,
  price,
  rating,
  liked,
  onWishlistPress,
  onCardPress,
}: CardProps) => {
  return (
    <Pressable onPress={onCardPress}>
      <Box width={165}>
        <Box height={170} backgroundColor="card" borderRadius="m">
          {/*Heart Icon */}
          <Box
            flex={1}
            flexDirection="row"
            justifyContent="flex-end"
            padding="s"
          >
            <PressableIcon liked={liked} onPress={onWishlistPress} />
          </Box>
        </Box>

        {/*Description */}
        <Text marginTop="s" variant="medium" color="black">
          {name}
        </Text>

        {/*Rupees*/}
        <Box flexDirection="row">
          <Text variant="rupees">₹{price} </Text>
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
            <Ionicons name="star" size={14} color={theme.colors.yellow} />
            <Text variant="rupees">{rating}</Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default Card;

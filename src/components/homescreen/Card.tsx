import React from 'react';
import { Box, Text, PressableIcon } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type CardProps = {
  name:string;
  price: number;
  rating: number;
}

const Card = ({name, price, rating}:CardProps) => {
  return (
    <Box width={170}>
      <Box height={170}  backgroundColor="card" borderRadius="m">
        {/*Heart Icon */}
        <Box flex={1} flexDirection="row" justifyContent="flex-end" padding="s">
          <PressableIcon />
        </Box>
      </Box>

      {/*Description */}
      <Text marginTop="s" variant="medium" color="black">
        {name}
      </Text>

      {/*Rupees*/}
      <Box flexDirection='row'>
        <Text variant="rupees">₹{price} </Text>
        <Text variant="medium" paddingLeft='xs' color='border' textDecorationLine='line-through'>₹1800 </Text>
        <Box flex={1} flexDirection='row' justifyContent='flex-end' alignItems="center">
          <Ionicons name="star" size={14} color={theme.colors.yellow} />
          <Text variant="rupees">{rating}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;

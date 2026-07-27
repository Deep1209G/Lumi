import {Box, Text} from '@src'
import React from 'react'
import { Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

type AddToCartButtonProps = {
  price?: number;
  onPress: () => void;
};

const AddToCartButton = ({price, onPress}: AddToCartButtonProps & { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
  <Box
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    backgroundColor="primary"
    borderRadius="m"
    paddingVertical="m"
  >
    <Ionicons
      name="bag-outline"
      size={20}
      color="white"
    />

    <Text
      color="white"
      variant="button"
      paddingLeft="s"
    >
      Add to Cart 
    </Text>
     <Text
      color="white"
      variant="button"
      paddingLeft="m"
    >
     ₹{price}
    </Text>
    

  </Box>
</Pressable>
  )
}

export default AddToCartButton
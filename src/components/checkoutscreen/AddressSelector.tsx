import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AddressSelectorProps = {
  fullName: string;
  address: string;
  onPress: () => void;
};
const AddressSelector = ({
  onPress,
  fullName,
  address,
}: AddressSelectorProps) => {
  return (
    <Box
      backgroundColor="white"
      height={100}
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="m"
    >
      {/* Left Section */}
      <Box flexDirection="row" flex={1} alignItems="center">
        <Box
          backgroundColor="gray"
          height={40}
          width={40}
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
        >
          <Ionicons name="location-outline" size={22} color="black" />
        </Box>

        <Box marginLeft="m" flex={1}>
          <Text variant="medium" color="textPrimary">
             {fullName}
          </Text>

          <Text variant="small" color="textSecondary" numberOfLines={2}>
            {address}
          </Text>
        </Box>
      </Box>

      {/* Right Section */}
      <Pressable onPress={onPress}>
        <Box
          backgroundColor="gray"
          paddingHorizontal="m"
          paddingVertical="xs"
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="medium" color="textPrimary">
            Edit
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};

export default AddressSelector;

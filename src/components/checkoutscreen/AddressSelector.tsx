/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AddressSelectorProps = {
  fullName: string;
  address: string;
  type?: string;

  onPress: () => void;
};
const AddressSelector = ({
  onPress,
  fullName,
  address,
  type,
}: AddressSelectorProps) => {
  return (
    <Box
      backgroundColor="white"
      minHeight={120}
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
      flexDirection="row"
      alignItems="center"
      padding="m"
    >
      {/* Left Section */}
      <Box flexDirection="row" flex={1} alignItems="center" marginRight="s">
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

          <Text variant="small" color="textSecondary" numberOfLines={3} ellipsizeMode="tail">
            {address}
          </Text>

          {type && (
            <Text variant="small" color="textPrimary" marginTop="xs">
              {type}
            </Text>
          )}
        </Box>
      </Box>

      {/* Right Section */}
      <Pressable onPress={onPress} style={{ width: 60 }}>
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

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '@src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '@src/theme/theme';

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
      minHeight={130}
      borderRadius="l"
      borderWidth={1}
      borderColor="tabgray"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="l"
      shadowColor="primary"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.08}
      shadowRadius={8}
      elevation={3}
    >
      <Box
        flexDirection="row"
        flex={1}
        alignItems="center"
        marginRight="m"
      >
        <Box
          backgroundColor="tabgray"
          height={48}
          width={48}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
        >
          <Ionicons
            name="location-outline"
            size={24}
            color={theme.colors.primary}
          />
        </Box>

        <Box flex={1} marginLeft="m">
          <Text variant="medium" color="textPrimary">
            {fullName}
          </Text>

          <Text
            marginTop="xs"
            variant="small"
            color="textSecondary"
            numberOfLines={3}
          >
            {address}
          </Text>

          {type && (
            <Box
              marginTop="s"
            >
              <Text variant="small" color="primary">
                {type}
              </Text>
            </Box>
          )}
        </Box>
      </Box>

      <Pressable onPress={onPress}>
        <Box
          backgroundColor="tabgray"
          paddingHorizontal="m"
          paddingVertical="s"
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="medium" color="primary">
            Edit
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};

export default AddressSelector;
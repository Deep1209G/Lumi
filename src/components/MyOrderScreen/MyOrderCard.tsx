/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, Text } from '@src';
import { Image, ImageSourcePropType } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type Props = {
  orderId: string;
  status: string;
  image: ImageSourcePropType;
  title: string;
  quantity: number;
  date: string;
  total: number;
};

const MyOrderCard = ({
  orderId,
  status,
  image,
  title,
  quantity,
  date,
  total,
}: Props) => {
  return (
    
  <Box
    padding="m"
    backgroundColor="white"
    borderRadius="m"
    borderColor="border"
    borderWidth={1}
    marginBottom="m"
  >
    {/* Top */}
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text variant="medium" color='black'>{orderId}</Text>

      <Text variant="medium" color="green">
        {status}
      </Text>
    </Box>

    {/* Product */}
    <Box
      flexDirection="row"
      marginTop="m"
      alignItems="center"
    >
      <Image
        source={image}
        style={{
          height: 50,
          width: 50,
          borderRadius: 12,
        }}
      />

      <Box flex={1} marginLeft="m">
        <Text variant="body">
          {title}
        </Text>

        <Text
          variant="medium"
          color="textSecondary"
          marginTop="xs"
        >
          Qty : {quantity}
        </Text>
      </Box>
    </Box>

    {/* Bottom */}
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop="m"
    >
      <Box
        flexDirection="row"
        alignItems="center"
      >
        <Ionicons
          name="time-outline"
          size={15}
          color={theme.colors.icon}
        />

        <Text
          variant="small"
          marginLeft="xs"
        >
          {date}
        </Text>
      </Box>

      <Text variant="rupees">
        ₹ {total}
      </Text>
    </Box>
  </Box>

  );
};

export default MyOrderCard;

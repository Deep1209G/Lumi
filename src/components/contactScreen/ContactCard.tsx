import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import theme from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

type ContactCardProps = {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
};

const ContactCard = ({ icon, label, value, onPress }: ContactCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="mainBackground"
        borderRadius="m"
        borderWidth={1.5}
        borderColor="tabgray"
        padding="m"
        flexDirection="row"
        alignItems="center"
      >
        <Box
          width={DeviceHelper.calWidth(40)}
          height={DeviceHelper.calHeight(40)}
          borderRadius="s"
          backgroundColor="tabgray"
          alignItems="center"
          justifyContent="center"
        >
          <Ionicons name={icon} size={DeviceHelper.calWidth(20)} color={theme.colors.primary} />
        </Box>

        <Box flex={1} justifyContent="center" marginLeft="m">
          <Text variant="medium">{label}</Text>
          <Text variant="button">{value}</Text>
        </Box>

        <Ionicons
          name="chevron-forward-outline"
          size={DeviceHelper.calWidth(15)}
          color={theme.colors.black}
        />
      </Box>
    </Pressable>
  );
};

export default ContactCard;

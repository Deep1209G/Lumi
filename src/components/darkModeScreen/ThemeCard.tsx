/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@shopify/restyle';
import { Box, Text } from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

type ThemeCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  selected: boolean;
  onPress: () => void;
};

const ThemeCard = ({
  title,
  subtitle,
  icon,
  iconBgColor,
  iconColor,
  selected,
  onPress,
}: ThemeCardProps) => {
  const theme = useTheme<Theme>();
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        padding="m"
        marginBottom="m"
        backgroundColor="white"
        borderRadius="m"
        borderWidth={2}
        borderColor={selected ? 'primary' : 'tabgray'}
        style={selected ? { backgroundColor: '#f0fdf4' } : undefined}
      >
        {/* Icon */}
        <Box
          height={DeviceHelper.calHeight(46)}
          width={DeviceHelper.calWidth(46)}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Ionicons name={icon} size={DeviceHelper.calWidth(24)} color={iconColor} />
        </Box>

        {/* Text */}
        <Box flex={1} marginLeft="m">
          <Text variant="body" color="textPrimary">{title}</Text>
          <Text variant="small" color="textSecondary" marginTop="xs">{subtitle}</Text>
        </Box>

        {/* Checkmark */}
        <Box
          height={DeviceHelper.calHeight(24)}
          width={DeviceHelper.calWidth(24)}
          borderRadius="round"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: selected ? theme.colors.primary : 'transparent',
            borderWidth: 2,
            borderColor: selected ? theme.colors.primary : theme.colors.tabgray,
          }}
        >
          {selected && (
            <Ionicons name="checkmark" size={DeviceHelper.calWidth(14)} color={theme.colors.white} />
          )}
        </Box>
      </Box>
    </Pressable>
  );
};

export default ThemeCard;

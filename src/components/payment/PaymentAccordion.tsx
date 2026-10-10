import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Box, Text } from '@src';
import { Theme } from '@src/theme/theme';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type PaymentAccordionProps = {
  onPress: () => void;
  leftIcon: string;
  title: string;
  expanded: boolean;
  children?: React.ReactNode;
  iconColor?: string;
};

const PaymentAccordion = ({
  onPress,
  leftIcon,
  title,
  expanded,
  children,
  iconColor: iconColorProp,
}: PaymentAccordionProps) => {
  const theme = useTheme<Theme>();
  const iconColor = iconColorProp ?? theme.colors.textPrimary;

  return (
    <Box
      backgroundColor="white"
      borderRadius="m"
      borderWidth={1.5}
      borderColor="tabgray"
      marginBottom="m"
    >
      <Pressable onPress={onPress}>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="m"
        >
          <Box flexDirection="row" alignItems="center">
            {/*Left Icon */}
            <Ionicons name={leftIcon} size={20} color={iconColor} />
            <Text marginLeft="m" color='textPrimary'>{title}</Text>
          </Box>

          {/*Right Icon */}
          <Ionicons
            name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={20}
            color={iconColor}
          />

        </Box>
      </Pressable>
      {expanded && (
        <Box borderTopWidth={1.5} borderColor="tabgray" padding="m">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default PaymentAccordion;

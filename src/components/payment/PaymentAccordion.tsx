import React from 'react';
import { Box, Text } from '@src';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type PaymentAccordionProps = {
  onPress: () => void;
  leftIcon: string;
  title: string;
  expanded: boolean;
  children?: React.ReactNode;
};

const PaymentAccordion = ({
  onPress,
  leftIcon,
  title,
  expanded,
  children,
}: PaymentAccordionProps) => {

  return (
    <Box
      backgroundColor="white"
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
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
            <Ionicons name={leftIcon} size={20} />
            <Text marginLeft="m">{title}</Text>
          </Box>

          {/*Right Icon */}
          <Ionicons
            name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={20}
          />

        </Box>
      </Pressable>
      {expanded && (
        <Box borderTopWidth={1} borderColor="border" padding="m">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default PaymentAccordion;

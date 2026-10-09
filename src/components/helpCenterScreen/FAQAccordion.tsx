import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

type FAQAccordionProps = {
  question: string;
  answer: string;
  expanded: boolean;
  onPress: () => void;
};

const FAQAccordion = ({
  question,
  answer,
  expanded,
  onPress,
}: FAQAccordionProps) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      backgroundColor="white"
      borderRadius="l"
      borderWidth={1.5}
      borderColor="tabgray"
      marginBottom="m"
    >
      <Pressable onPress={onPress}>
        <Box
          height={DeviceHelper.calHeight(60)}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding='m'
        >
          <Text variant="medium" flex={1} color='textPrimary'>
            {question}
          </Text>

          <Ionicons
            name={
              expanded
                ? 'chevron-up-outline'
                : 'chevron-down-outline'
            }
            size={DeviceHelper.calWidth(22)}
            color={theme.colors.black}
          />
        </Box>
      </Pressable>

      {expanded && (
        <Box
          borderTopWidth={1.5}
          borderColor="tabgray"
          padding="m"
        >
          <Text color="textSecondary" variant='medium'>
            {answer}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default FAQAccordion;
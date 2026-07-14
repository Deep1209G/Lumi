import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import theme from '@src/theme/theme';

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
  return (
    <Box
      backgroundColor="white"
      borderRadius="l"
      borderWidth={1}
      borderColor="border"
      marginBottom="m"
    >
      <Pressable onPress={onPress}>
        <Box
          height={60}
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
            size={22}
            color={theme.colors.icon}
          />
        </Box>
      </Pressable>

      {expanded && (
        <Box
          borderTopWidth={1}
          borderColor="border"
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
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, FAQAccordion, HeaderBack, Text } from '@src';
import { Pressable, FlatList } from 'react-native';
import theme from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { faqs } from '@src/data/faqs';

const HelpCenterScreen = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAccordion = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>
      {/*Heading Section */}
      <Box>
        <HeaderBack title="Help Center" />
      </Box>

      {/* Support Card */}
      <Box marginTop="m">
        <Pressable onPress={() => console.log('Pressed chat with support')}>
          <Box
            height={60}
            backgroundColor="white"
            borderRadius="m"
            borderWidth={1}
            borderColor="border"
            padding="m"
            flexDirection="row"
          >
            <Box flex={1} justifyContent="center">
              <Text variant="button">Chat with Support</Text>
            </Box>
            <Box justifyContent="center">
              <Ionicons
                name="chevron-forward-outline"
                size={15}
                color={theme.colors.icon}
              />
            </Box>
          </Box>
        </Pressable>
      </Box>

      {/* FAQ */}
      <Text marginTop="m" variant="medium">
        Frequently Asked Question
      </Text>
      <Box marginTop='m'>
        <FlatList
          data={faqs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FAQAccordion
              question={item.question}
              answer={item.answer}
              expanded={expandedId === item.id}
              onPress={() => handleAccordion(item.id)}
            />
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default HelpCenterScreen;

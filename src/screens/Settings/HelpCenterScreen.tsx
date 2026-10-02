/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, FAQAccordion, HeaderBack, Text } from '@src';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { faqs } from '@src/data/faqs';
import theme from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';


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
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
      <Box paddingLeft="l" paddingRight="l">
      {/*Heading Section */}
      <Box>
        <HeaderBack title="Help Center" />
      </Box>

      {/* Support Card */}
      <Box marginTop="m">
        <Pressable onPress={() => console.log('Pressed chat with support')}>
          <Box
            height={DeviceHelper.calHeight(60)}
            backgroundColor="primary"
            borderRadius="m"
            padding="m"
            flexDirection="row"
          >
            <Box flex={1} justifyContent="center">
              <Text variant="button" color="white">
                Chat with Support
              </Text>
            </Box>
            <Box justifyContent="center">
              <Ionicons
                name="chevron-forward-outline"
                size={DeviceHelper.calWidth(15)}
                color={theme.colors.white}
              />
            </Box>
          </Box>
        </Pressable>
      </Box>

      {/* FAQ */}
      <Text marginTop="m" variant="medium">
        Frequently Asked Question
      </Text>
      <Box marginTop="m">
        {faqs.map(item => (
          <Box key={item.id} >
            <FAQAccordion
              question={item.question}
              answer={item.answer}
              expanded={expandedId === item.id}
              onPress={() => handleAccordion(item.id)}
            />
          </Box>
        ))}
      </Box>
      </Box>
    </SafeAreaView>
  );
};

export default HelpCenterScreen;

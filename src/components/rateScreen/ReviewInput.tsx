/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput } from 'react-native';
import { Box, Text } from '@src';

type ReviewInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
};

const ReviewInput = ({
  value,
  onChangeText,
  maxLength = 200,
}: ReviewInputProps) => {
  return (
    <>
      <Text marginTop="xl" variant="medium" color="textPrimary" fontWeight="700">
        WRITE A REVIEW (OPTIONAL)
      </Text>

      <Box
        backgroundColor="white"
        marginTop="m"
        borderWidth={1.5}
        borderColor="tabgray"
        borderRadius="m"
        padding="m"
        height={170}
      >
        <TextInput
          multiline
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          placeholder="Write your review..."
          textAlignVertical="top"
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />

        <Text alignSelf="flex-end">
          {value.length}/{maxLength}
        </Text>
      </Box>
    </>
  );
};

export default ReviewInput;

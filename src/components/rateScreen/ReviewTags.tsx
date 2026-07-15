import React from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from '@src';
import { reviewTags } from '../../data/reviewTags';

type ReviewTagsProps = {
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
};

const ReviewTags = ({
  selectedTags,
  onToggleTag,
}: ReviewTagsProps) => {
  return (
    <>
      <Text
        marginTop="xl"
        variant="medium"
        fontWeight="700"
      >
        WHAT DID YOU LIKE?
      </Text>

      <Box
        flexDirection="row"
        flexWrap="wrap"
        marginTop="m"
      >
        {reviewTags.map(tag => {
          const selected = selectedTags.includes(tag);

          return (
            <Pressable
              key={tag}
              onPress={() => onToggleTag(tag)}
            >
              <Box
                marginRight="m"
                marginBottom="m"
                paddingHorizontal="m"
                paddingVertical="s"
                borderRadius="xl"
                borderWidth={1.5}
                borderColor={selected ? 'white' : 'gray'}
                backgroundColor={selected ? 'black' : 'white'}
              >
                <Text
                variant='body'
                  color={selected ? 'white' : 'black'}
                >
                  {tag}
                </Text>
              </Box>
            </Pressable>
          );
        })}
      </Box>
    </>
  );
};

export default ReviewTags;
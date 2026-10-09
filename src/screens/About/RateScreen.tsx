/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Pressable, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';
import {
  Box,
  HeaderBack,
  Images,
  Text,
  ReviewInput,
  ReviewTags,
  CustomButton,
  useRateScreen,
} from '@src';

const RateScreen = () => {
  const theme = useTheme<Theme>();
  const {
    rating,
    setRating,
    review,
    setReview,
    selectedTags,
    toggleTag,
    handleSubmit,
    ratingLabels,
  } = useRateScreen();

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box paddingLeft="l" paddingRight="l">
          {/*Header */}
          <HeaderBack title="Rate The App" />

          {/*Rate Card */}
          <Box
            alignItems="center"
            backgroundColor="white"
            marginTop="m"
            borderRadius="m"
            height={DeviceHelper.calHeight(300)}
            borderWidth={1.5}
            borderColor="tabgray"
          >
            <Box
              marginTop="xl"
              backgroundColor="black"
              width={DeviceHelper.calWidth(80)}
              height={DeviceHelper.calHeight(80)}
              alignItems="center"
              justifyContent="center"
              borderRadius="m"
            >
              <Image
                source={Images.logo1}
                style={{
                  width: DeviceHelper.calWidth(55),
                  height: DeviceHelper.calHeight(55),
                }}
              />
            </Box>
            <Text variant="heading" marginTop="s">
              LUMI
            </Text>
            <Text variant="medium" marginTop="s" marginBottom="s">
              How would you rate your experience?
            </Text>

            <Box
              flexDirection="row"
              justifyContent="space-between"
              width="80%"
              marginTop="m"
            >
              {[1, 2, 3, 4, 5].map(item => (
                <Pressable key={item} onPress={() => setRating(item)}>
                  <Ionicons
                    name={item <= rating ? 'star' : 'star-outline'}
                    size={DeviceHelper.calWidth(40)}
                    color={
                      item <= rating ? theme.colors.yellow : theme.colors.gray
                    }
                  />
                </Pressable>
              ))}
            </Box>
            <Text marginTop="m" variant="medium" color="yellow">
              {ratingLabels[rating - 1]}
            </Text>
          </Box>

          {/*Rate Card */}
          <ReviewInput value={review} onChangeText={setReview} />

          {/*Rate Tags */}
          <ReviewTags selectedTags={selectedTags} onToggleTag={toggleTag} />

          <CustomButton title="Submit Review" onPress={handleSubmit} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RateScreen;

/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { FlatList, Image, View, Dimensions } from 'react-native';

import { useTheme } from '@shopify/restyle';
import { Box, Text, CustomButton, onboardingData } from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }: any) => {
  const theme = useTheme<Theme>();
  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContinue = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });

      setCurrentIndex(prev => prev + 1);
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
    <Box flex={1} >
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Box width={width} flex={1}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '50%',
              }}
              resizeMode="cover"
            />

            <Box flex={1} padding="l">
              {/* Indicators */}
              <Box
                flexDirection="row"
                justifyContent="center"
                marginBottom="xl"
              >
                {onboardingData.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      height: 4,
                      width: DeviceHelper.calWidth(90),
                      borderRadius: 2,
                      marginHorizontal: DeviceHelper.calWidth(4),

                      backgroundColor:
                        currentIndex === index ? theme.colors.primary : theme.colors.tabgray,
                    }}
                  />
                ))}
              </Box>

              <Text variant='title' marginBottom="m">
                {item.title}
              </Text>

              <Text variant='description'>
                {item.description}
              </Text>
            </Box>
          </Box>
        )}
      />

      <Box position="absolute" bottom={1} left={DeviceHelper.calWidth(20)} right={DeviceHelper.calWidth(20)}>
        <CustomButton
          title={
            currentIndex === onboardingData.length - 1
              ? 'Get Started'
              : 'Continue'
          }
          onPress={handleContinue}
        />

        {currentIndex !== onboardingData.length - 1 && (
          <Text textAlign="center" marginTop="m" onPress={handleSkip}>
            Skip
          </Text>
        )}
      </Box>
    </Box>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

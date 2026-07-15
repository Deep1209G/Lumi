import React, { useEffect, useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import { Box, Text } from '@src';

type ToggleProps = {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const Toggle = ({
  title,
  description,
  value,
  onValueChange,
}: ToggleProps) => {
  const translateX = useRef(
    new Animated.Value(value ? 22 : 0),
  ).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 22 : 0,
      friction: 8,
      tension: 50,
      useNativeDriver: true,
    }).start();
  }, [value, translateX]);

  return (
    <Box
      backgroundColor="white"
      padding="m"
      borderWidth={2}
      borderColor="gray"
      borderRadius="m"
      marginBottom="m"
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flex={1} marginRight="m">
          <Text variant="medium" color="textPrimary">
            {title}
          </Text>

          <Text
            marginTop="xs"
            variant="small"
            color="textSecondary"
          >
            {description}
          </Text>
        </Box>

        <Pressable
          onPress={() => onValueChange(!value)}
          hitSlop={10}
        >
          <Box
            width={52}
            height={30}
            borderRadius="xl"
            backgroundColor={value ? 'black' : 'gray'}
            justifyContent="center"
            paddingHorizontal="xs"
          >
            <Animated.View
              style={{
                transform: [{ translateX }],
              }}
            >
              <Box
                width={22}
                height={22}
                borderRadius="xl"
                backgroundColor="white"
                borderWidth={1}
                borderColor="border"
              />
            </Animated.View>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Toggle;
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import { Box, Text } from '@src';
import { DeviceHelper } from '@src/utils';

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
    new Animated.Value(value ? DeviceHelper.calWidth(22) : 0),
  ).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? DeviceHelper.calWidth(22) : 0,
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
      borderColor="tabgray"
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
            width={DeviceHelper.calWidth(52)}
            height={DeviceHelper.calHeight(30)}
            borderRadius="xl"
            backgroundColor={value ? 'primary' : 'tabgray'}
            justifyContent="center"
            paddingHorizontal="xs"
          >
            <Animated.View
              style={{
                transform: [{ translateX }],
              }}
            >
              <Box
                width={DeviceHelper.calWidth(22)}
                height={DeviceHelper.calHeight(22)}
                borderRadius="xl"
                backgroundColor="white"
             
              />
            </Animated.View>
          </Box>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Toggle;
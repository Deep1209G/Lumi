/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@shopify/restyle';
import { Box } from '@src';
import { Theme } from '../../theme/theme';
import { DeviceHelper } from '@src/utils';

type Props = TextInputProps & {
  leftIcon?: string;
  rightIcon?: string;
  onPressRightIcon?: () => void;
};

const CustomTextInput = ({
  leftIcon,
  rightIcon,
  onPressRightIcon,
  secureTextEntry,
  ...rest
}: Props) => {
  const theme = useTheme<Theme>();

  const [isVisible, setIsVisible] = useState(false);

  const isPasswordField = secureTextEntry;

  return (
    <Box
      height={DeviceHelper.calHeight(50)}
      flexDirection="row"
      alignItems="center"
      borderWidth={1}
      borderColor="border"
      borderRadius="m"
      paddingHorizontal="m"
      backgroundColor="mainBackground"
    >
      {/* Left Icon */}
      <Ionicons name={leftIcon} size={20} color={theme.colors.icon} />

      {/* Input */}
      <Box flex={1} marginLeft="s">
        <TextInput
          {...rest}
          placeholderTextColor={theme.colors.textSecondary}
          secureTextEntry={isPasswordField ? !isVisible : false}
          style={{ paddingVertical: 0 }}
        />
      </Box>

      {/* Right Icon logic */}
      {isPasswordField ? (
        <TouchableOpacity onPress={() => setIsVisible(prev => !prev)}>
          <Ionicons
            name={isVisible ? 'eye-off-outline' : 'eye-outline'}
            size={18}
            color={theme.colors.textSecondary}
          />
        </TouchableOpacity>
      ) : (
        rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Ionicons
              name={rightIcon}
              size={18}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        )
      )}
    </Box>
  );
};

export default CustomTextInput;

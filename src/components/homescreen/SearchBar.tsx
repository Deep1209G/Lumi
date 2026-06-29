/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box } from '@src';
import { Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type SearchBarProps = {
  placeholder?: string;
  onPress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

const SearchBar = ({
  placeholder = 'Search clothes, brands...',
  onPress,
  rightIcon,
}: SearchBarProps) => {
  return (
    <Box
      height={50}
      backgroundColor="mainBackground"
      borderWidth={1}
      borderColor="border"
      borderRadius="m"
      flexDirection="row"
      alignItems="center"
      paddingHorizontal="m"
    >
      {/* Left Icon */}
      <Ionicons
        name="search-outline"
        size={20}
        color={theme.colors.border}
      />

      {/* Text Input */}
      <TextInput
        style={{
          flex: 1,
          paddingLeft: theme.spacing.m,
        }}
        placeholder={placeholder}
      />

      {/* Right Icon (Optional) */}
      {rightIcon && (
        <Pressable onPress={onPress}>
          <Box
            backgroundColor="textPrimary"
            height={30}
            width={30}
            justifyContent="center"
            alignItems="center"
            borderRadius="s"
          >
            <Ionicons
              name={rightIcon}
              size={18}
              color={theme.colors.mainBackground}
            />
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default SearchBar;
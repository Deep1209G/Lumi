import { Box } from '@src';
import React from 'react';
import { Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type SearchBarProps = {
  onPress?: () => void;
};
const SearchBar = ({ onPress }: SearchBarProps) => {
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
      <Ionicons name="search-outline" size={20} color={theme.colors.border} />
      <TextInput
        style={{ flex: 1, paddingLeft: theme.spacing.m }}
        placeholder="Search clothes, brands..."
      />

      <Box
        backgroundColor="textPrimary"
        height={30}
        width={30}
        justifyContent="center"
        alignItems='center'
        borderRadius='s'
      >
        <Pressable onPress={onPress}>
          <Ionicons
            name="options-outline"
            size={18}
            color={theme.colors.mainBackground}
          />
        </Pressable>
      </Box>
    </Box>
  );
};

export default SearchBar;

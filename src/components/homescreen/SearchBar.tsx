/* eslint-disable react-native/no-inline-styles */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Box } from '@src';
import { Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme/theme';

type SearchBarProps = {
  placeholder?: string;
  onPress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onSearchPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
};

const SearchBar = ({
  placeholder ,
  onPress,
  onSearchPress,
  rightIcon,
  value,
  onChangeText,
  editable,
}: SearchBarProps) => {
  const { t } = useTranslation();
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
      <Pressable
        onPress={onSearchPress}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons name="search-outline" size={20} color={theme.colors.icon} />

        <TextInput
          style={{
            flex: 1,
            paddingLeft: theme.spacing.m,
          }}
        placeholder={placeholder || t('searchPlaceholder')}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          pointerEvents="none"
        />
      </Pressable>

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

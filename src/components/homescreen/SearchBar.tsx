/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@shopify/restyle';
import { Box } from '@src';
import { Theme } from '@src/theme/theme';

type SearchBarProps = {
  placeholder?: string;
  animatedPlaceholders?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  onPress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onSearchPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  isDark?: boolean;
};

const SearchBar = ({
  placeholder,
  animatedPlaceholders,
  typingSpeed = 75,
  pauseDuration = 1800,
  onPress,
  onSearchPress,
  rightIcon,
  value,
  onChangeText,
  editable = true,
  isDark = false,
}: SearchBarProps) => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation();

  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('');

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const placeholders = useMemo(
    () =>
      animatedPlaceholders && animatedPlaceholders.length > 0
        ? animatedPlaceholders
        : [placeholder || t('searchPlaceholder')],
    [animatedPlaceholders, placeholder, t]
  );

  useEffect(() => {
    if (!placeholders.length) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const animate = () => {
      const currentWord = placeholders[wordIndex];

      if (!deleting) {
        charIndex++;
        setAnimatedPlaceholder(currentWord.slice(0, charIndex));

        if (charIndex === currentWord.length) {
          deleting = true;

          timeoutRef.current = setTimeout(animate, pauseDuration);
        } else {
          timeoutRef.current = setTimeout(animate, typingSpeed);
        }
      } else {
        charIndex--;
        setAnimatedPlaceholder(currentWord.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % placeholders.length;

          timeoutRef.current = setTimeout(animate, 300);
        } else {
          timeoutRef.current = setTimeout(
            animate,
            Math.max(typingSpeed / 2, 30)
          );
        }
      }
    };

    animate();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [placeholders, typingSpeed, pauseDuration]);

  const containerStyle = isDark
    ? { backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.18)' }
    : { backgroundColor: theme.colors.white, borderWidth: 1, borderColor: theme.colors.border };

  const iconColor = isDark ? 'rgba(255,255,255,0.5)' : theme.colors.icon;
  const textColor = isDark ? theme.colors.white : theme.colors.textPrimary;
  const placeholderColor = isDark ? 'rgba(255,255,255,0.4)' : theme.colors.textSecondary;

  return (
    <Box
      height={50}
      borderRadius="m"
      flexDirection="row"
      alignItems="center"
      paddingHorizontal="m"
      style={containerStyle}
    >
      <Pressable
        onPress={onSearchPress}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="search-outline"
          size={20}
          color={iconColor}
        />

        <TextInput
          style={{
            flex: 1,
            paddingLeft: theme.spacing.m,
            color: textColor,
          }}
          placeholder={animatedPlaceholder}
          placeholderTextColor={placeholderColor}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
        />
      </Pressable>

      {rightIcon && (
        <Pressable onPress={onPress}>
          <Box
            backgroundColor="primary"
            height={30}
            width={30}
            justifyContent="center"
            alignItems="center"
            borderRadius="s"
          >
            <Ionicons
              name={rightIcon}
              size={18}
              color={theme.colors.white}
            />
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default SearchBar;
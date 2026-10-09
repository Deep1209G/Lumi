import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Box, Text } from '@src';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

type Props = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

const LanguageCard = ({
  title,
  selected,
  onPress,
}: Props) => {
  const theme = useTheme<Theme>();
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor={selected ? 'tabgray' : 'white'}
        borderWidth={2}
        borderColor={selected ? 'primary' : 'tabgray'}
        borderRadius="m"
        padding="m"
        marginBottom="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          variant="medium"
          color="textPrimary"
        >
          {title}
        </Text>

        {selected && (
          <Ionicons
            name="checkmark-outline"
            size={DeviceHelper.calWidth(20)}
            color={theme.colors.primary}
          />
        )}
      </Box>
    </Pressable>
  );
};

export default LanguageCard;
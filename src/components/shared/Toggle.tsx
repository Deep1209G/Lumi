import React from 'react';
import { Switch } from 'react-native';
import { Box, Text } from '@src';
import theme from '../../theme/theme';

type ToggleProps = {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const Toggle = ({ title, description, value, onValueChange }: ToggleProps) => {
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
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="medium" color='textPrimary'>{title}</Text>

        <Switch
          trackColor={{
            false: theme.colors.gray,
            true: theme.colors.black,
          }}
          thumbColor={theme.colors.white}
          value={value}
          onValueChange={onValueChange}
        />
      </Box>

      <Text marginTop="xs" variant="small" color="textSecondary">
        {description}
      </Text>
    </Box>
  );
};

export default Toggle;

import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@shopify/restyle';
import Box from './Box';
import Text from './Text';
import { Theme } from '@src/theme/theme';
import { DeviceHelper } from '@src/utils';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  rightIcon?: React.ComponentProps<typeof Ionicons>['name'];
}

const CustomButton = ({
  title,
  rightIcon,
  ...props
}: CustomButtonProps) => {
  const theme = useTheme<Theme>();
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <Box
        height={DeviceHelper.calHeight(50)}
        borderRadius="m"
        backgroundColor="primary"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <Text
          color="white"
          variant="button"
        >
          {title}
        </Text>

        {rightIcon && (
          <Box marginLeft="s">
            <Ionicons
              name={rightIcon}
              size={18}
              color={theme.colors.white}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default CustomButton;
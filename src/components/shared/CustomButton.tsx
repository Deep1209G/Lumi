import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Box from './Box';
import Text from './Text';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton = ({
  title,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <Box
        height={56}
        borderRadius="l"
        backgroundColor="textPrimary"
        justifyContent="center"
        alignItems="center">
        <Text
          color="mainBackground"
          fontSize={18}
          fontWeight="600">
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CustomButton;
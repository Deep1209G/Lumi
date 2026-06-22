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
        height={50}
        borderRadius="m"
        backgroundColor="textPrimary"
        justifyContent="center"
        alignItems="center">
        <Text
          color="mainBackground"
          variant='button'>
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CustomButton;
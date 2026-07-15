import React from 'react';
import { Box, Text } from '@src';

type TermCardProps = {
  title: string;
  description: string;
  number: string;
};

const TermCard = ({ title, description, number }: TermCardProps) => {
  return (
    <Box
      marginTop='s'
      backgroundColor="white"
      borderRadius="m"
      justifyContent='center'
      padding='m'
      borderWidth={1.5}
      borderColor='gray'
    >
      <Box flexDirection="row">
        <Text variant="button">{number}.</Text>
        <Text variant="button" paddingLeft='s'>{title}</Text>
      </Box>
      <Text marginTop='s' variant='description' textAlign="justify">{description}</Text>
    </Box>
  );
};

export default TermCard;

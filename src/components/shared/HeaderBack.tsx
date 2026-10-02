import { Box, Text, PressIcon } from '@src';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { DeviceHelper } from '@src/utils';

type HeaderProps = {
  title: string;
};
const HeaderBack = ({ title }: HeaderProps) => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <PressIcon
        icon="chevron-back-outline"
        onPressIcon={() => navigation.goBack()}
      />
      <Text variant="heading">{title}</Text>
      <Box width={DeviceHelper.calWidth(50)} />
    </Box>
  );
};

export default HeaderBack;

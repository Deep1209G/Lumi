/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { Box, Text, PressIcon } from '@src';
import { settingMenu } from '@src/data/settingMenu';
import useSetting  from '../../hooks/useSetting';
import SettingCard from '../../components/settingScreen/SettingCard'



const SettingsScreen = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProp>();
  const { handleMenuPress } = useSetting();

  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Heading Section */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <PressIcon
          icon="chevron-back-outline"
          onPressIcon={() => navigation.goBack()}
        />
        <Text variant="heading">Settings</Text>
        <Box />
      </Box>

      {/*Card*/}
      <Box marginTop="m">
        {settingMenu.map(item => (
          <Box key={item.id} marginTop="m">
            <SettingCard 
             title={item.title}
             onPress={() => handleMenuPress(item.id)}/>
          </Box>
        ))}
      </Box>
    </SafeAreaView>
  );
};

export default SettingsScreen;

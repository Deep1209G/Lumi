/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import { Box, HeaderBack } from '@src';
import { settingMenu } from '@src/data/settingMenu';
import useSetting  from '../../hooks/useSetting';
import SettingCard from '../../components/settingScreen/SettingCard'



const SettingsScreen = () => {
 
  const { handleMenuPress } = useSetting();

  return (
    <SafeAreaView style={{ flex: 1, padding: theme.spacing.l }}>

      {/*Heading Section */}
      <Box>
        <HeaderBack title='Settings'/>
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

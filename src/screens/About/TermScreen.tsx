import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {termsData} from '../../data/termsData'
import { Box, HeaderBack, TermCard, Text} from '@src';
import { ScrollView } from 'react-native';
const TermScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Box paddingLeft="l" paddingRight="l" >

        {/*Header */}
        <HeaderBack title="Terms of Service" />
        
        <Box>
        <Text marginTop='m' variant='medium' > Last updated: 15 July 2026</Text>
        </Box>

        {/*Card of Term Screen */}
      <Box marginTop='s'>
        {termsData.map(item => (
          <TermCard
            key={item.id}
            title={item.title}
            description={item.description}
            number={item.number}
          />
        ))}
        </Box>

        <Box  alignItems='center'>
          <Text marginTop='m' variant='medium' >© 2026 LUMI Inc. All rights reserved.</Text>
        </Box>
      </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermScreen;

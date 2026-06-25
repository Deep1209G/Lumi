import React, { useState } from 'react';
import { Box, Text } from '@src';
import { FlatList, Pressable } from 'react-native';

const categories = ['All Item', 'Dress', 'T-shirt', 'Jacket', 'Shoes', 'Bag'];

const CategoryTab = () => {
  const [selected, setSelected] = useState('All Item');
  return (
    
      <FlatList
        data={categories}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelected(item)}>
            <Box
              paddingHorizontal="m"
              paddingVertical="s"
              marginRight="m"
              borderRadius="m"
              backgroundColor={
                selected === item ? 'textPrimary' : 'mainBackground'
              }
            >
              <Text
              variant='medium'
                color={selected === item ? 'mainBackground' : 'textPrimary'}
              >
                {item}
              </Text>
            </Box>
          </Pressable>
        )}
      />

  );
};

export default CategoryTab;

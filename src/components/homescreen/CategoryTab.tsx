import React, { useState } from 'react';
import { Box, Text } from '@src';
import { FlatList, Pressable } from 'react-native';
import { categories } from '@src/data/category';

type Props ={
  onSelectCategory: (category:string) => void;

}
const CategoryTab = ({ onSelectCategory }: Props) => {
  const [selected, setSelected] = useState('All Item');

  const handlePress = (item:string) => {
    setSelected(item);
    onSelectCategory(item);
  };
  
  return (
    
      <FlatList
        data={categories}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
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

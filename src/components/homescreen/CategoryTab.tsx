import { useTranslation } from 'react-i18next';
import React from 'react';
import { Box, Text } from '@src';
import { FlatList, Pressable } from 'react-native';
import { categories } from '@src/data/category';

type Props = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};
const CategoryTab = ({ onSelectCategory, selectedCategory }: Props) => {

  const handlePress = (item: string) => {
    
    onSelectCategory(item);
  };
  const { t } = useTranslation();

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
              selectedCategory === item ? 'textPrimary' : 'mainBackground'
            }
          >
            <Text
              variant="medium"
              color={selectedCategory === item ? 'mainBackground' : 'textPrimary'}
            >
              {t(item)}
            </Text>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default CategoryTab;

import { useState } from 'react';
import { products } from '@src/data/produts';

const useSearch = () => {
  // Search Text
  const [searchText, setSearchText] = useState('');

  // Show/Hide Suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter Products
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // First 5 Suggestions
  const suggestions = filteredProducts.slice(0, 5);

  // Handle Search
  const handleSearch = (text: string) => {
    setSearchText(text);
    setShowSuggestions(true);
  };

  // Handle Suggestion Click
  const handleSuggestionPress = (name: string) => {
    setSearchText(name);
    setShowSuggestions(false);
  };

  return {
    searchText,
    showSuggestions,
    filteredProducts,
    suggestions,
    handleSearch,
    handleSuggestionPress,
  };
};

export default useSearch;
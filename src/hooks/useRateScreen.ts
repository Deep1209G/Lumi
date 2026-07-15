import { useState } from 'react';

const ratingLabels = [
  'Poor',
  'Fair',
  'Good',
  'Very Good',
  'Excellent',
];

const useRateScreen = () => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(item => item !== tag)
        : [...prev, tag],
    );
  };

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Review:', review);
    console.log('Selected Tags:', selectedTags);
  };

  return {
    rating,
    setRating,
    review,
    setReview,
    selectedTags,
    toggleTag,
    handleSubmit,
    ratingLabels,
  };
};

export default useRateScreen;
import React, { useRef, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { banners } from '@src/data/banners';
import { Box, BannerCard } from '@src';
import { DeviceHelper } from '@src/utils';
import theme from '@src/theme/theme';

const BannerSlider = () => {
  const bannerWidth = DeviceHelper.width() - (theme.spacing.l * 2);

  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / bannerWidth,
    );

    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentIndex === banners.length - 1
          ? 0
          : currentIndex + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={bannerWidth}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BannerCard
            width={bannerWidth}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
      />

      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="m"
      >
        {banners.map((_, index) => (
          <Box
            key={index}
            width={DeviceHelper.calWidth(8)}
            height={DeviceHelper.calWidth(8)}
            borderRadius="s"
            marginHorizontal="xs"
            backgroundColor={
              currentIndex === index ? 'primary' : 'tabgray'
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default BannerSlider;
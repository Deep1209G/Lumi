import { Box, Text } from '@src';


const BannerCard = () => {
  return (
    <Box
      backgroundColor="green"
      borderRadius="m"
      justifyContent="center"
      height={130}
      paddingLeft="s"
    >
      <Text variant="subtitle" color="mainBackground">
        Summer Collection
      </Text>
      <Text variant="medium" color="yellow">
        Up to 30% off
      </Text>
    </Box>
  );
};

export default BannerCard;

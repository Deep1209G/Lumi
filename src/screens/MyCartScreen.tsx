/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { Box, CustomButton, Text } from '@src';
import theme from '@src/theme/theme';
import { CartContext } from '@src/context/CardContext';
import CartCard from '@src/components/mycartscreen/CartCard';

const MyCartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { cart } = useContext(CartContext);
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="l">
        {/* Header */}
        <Text variant="heading">My Cart ({cart.length})</Text>

        {cart.length === 0 ? (
          /* Empty Cart */
          <Box marginTop="xxxl" justifyContent="center" alignItems="center">
            <Box
              height={60}
              width={60}
              backgroundColor="white"
              borderColor="border"
              borderWidth={2}
              borderRadius="m"
              justifyContent="center"
              alignItems="center"
            >
              <Ionicons
                name="bag-outline"
                size={30}
                color={theme.colors.border}
              />
            </Box>

            <Text marginTop="m" variant="button">
              Your Cart is Empty
            </Text>

            <Text marginTop="s" variant="medium" textAlign="center">
              Add your favorite products to start shopping.
            </Text>

            <Box width={180} marginTop="m">
              <CustomButton
                title="Start Shopping"
                onPress={() =>
                  navigation.navigate('MainTab', {
                    screen:'Home'
                  })
                }
              />
            </Box>
          </Box>
        ) : (
          /* Cart Items */
          <Box marginTop="l">
            <FlatList
              data={cart}
              keyExtractor={item => item.product.id}
              renderItem={({ item }) => (
                <CartCard
                  product={item.product}
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.product.id)}
                  onDecrease={() => decreaseQuantity(item.product.id)}
                  onRemove={() => removeFromCart(item.product.id)}
                />
              )}
            />
          </Box>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default MyCartScreen;

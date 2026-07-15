/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import theme from '@src/theme/theme';
import CartCard from '@src/components/mycartscreen/CartCard';
import { CartContext } from '@src/context/CardContext';
import useCartSummary from '../../hooks/useCartSummary';
import { RootStackParamList } from '../../navigation/AppNavigation';
import {
  Box,
  CustomButton,
  Text,
} from '@src';

const MyCartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const {
    totalItems,
    subtotal,
    gst,
    shipping,
    total,
  } = useCartSummary(cart);

  const tabBarHeight = useBottomTabBarHeight();

  const renderFooter = () => (
    <>
      <Box
        marginTop="l"
        padding="m"
        borderRadius="m"
        backgroundColor="white"
      >
        <Text variant="subtitle">
          Order Summary
        </Text>

        <Box
          marginTop="m"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="body" >Items ({totalItems})</Text>
          <Text variant="description">₹ {subtotal.toFixed(2)}</Text>
        </Box>

        <Box
          marginTop="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="body">GST (18%)</Text>
          <Text variant="description">₹ {gst.toFixed(2)}</Text>
        </Box>

        <Box
          marginTop="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="body">Shipping</Text>
          <Text variant="description">
            {shipping === 0 ? 'Free' : `₹ ${shipping.toFixed(2)}`}
          </Text>
        </Box>

        <Box
          marginTop="m"
          borderTopWidth={1}
          borderColor="border"
        />

        <Box
          marginTop="m"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="subtitle">
            Total
          </Text>

          <Text variant="subtitle">
            ₹ {total.toFixed(2)}
          </Text>
        </Box>
      </Box>

      <Box marginTop="m">
        <CustomButton
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </Box>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingLeft="l" paddingRight="l">
        <Text variant="heading">
          My Cart ({cart.length})
        </Text>

        {cart.length === 0 ? (
          <Box
            flex={1}
            marginTop="xxxl"
            alignItems="center"
          >
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

            <Text
              marginTop="s"
              variant="medium"
              textAlign="center"
            >
              Add your favorite products to start shopping.
            </Text>

            <Box width={180} marginTop="m">
              <CustomButton
                title="Start Shopping"
                onPress={() =>
                  navigation.navigate('MainTab', {
                    screen: 'Home',
                  })
                }
              />
            </Box>
          </Box>
        ) : (
          <Box flex={1} marginTop="l">
            <FlatList
              data={cart}
              keyExtractor={item => item.product.id}
              renderItem={({ item }) => (
                <CartCard
                  product={item.product}
                  quantity={item.quantity}
                  onIncrease={() =>
                    increaseQuantity(item.product.id)
                  }
                  onDecrease={() =>
                    decreaseQuantity(item.product.id)
                  }
                  onRemove={() =>
                    removeFromCart(item.product.id)
                  }
                />
              )}
              ListFooterComponent={renderFooter}
              contentContainerStyle={{
                paddingBottom: tabBarHeight + 20,
              }}
              showsVerticalScrollIndicator={false}
            />
          </Box>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default MyCartScreen;
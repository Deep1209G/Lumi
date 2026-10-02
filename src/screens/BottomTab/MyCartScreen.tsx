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
import { DeviceHelper } from '@src/utils';
import useCartSummary from '../../hooks/useCartSummary';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { Box, CustomButton, Text } from '@src';

const MyCartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const { totalItems, subtotal, gst, shipping, total } = useCartSummary(cart);

  const tabBarHeight = useBottomTabBarHeight();

  const renderFooter = () => (
  <>
    <Box marginTop="m">
      <Text variant="subtitle">Order Summary</Text>

      <Box
        marginTop="m"
        backgroundColor="white"
        borderRadius="xl"
        padding="l"
        borderWidth={1}
        borderColor="tabgray"
        shadowColor="primary"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.08}
        shadowRadius={10}
        elevation={4}
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="m"
        >
          <Text variant="body">
            Items ({totalItems})
          </Text>

          <Text variant="description" color="primary">
            ₹ {subtotal.toFixed(2)}
          </Text>
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="m"
        >
          <Text variant="body">
            GST (18%)
          </Text>

          <Text variant="description" color="primary">
            ₹ {gst.toFixed(2)}
          </Text>
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="m"
        >
          <Text variant="body">
            Shipping
          </Text>

          <Text
            variant="description"
            color={shipping === 0 ? 'green' : 'primary'}
          >
            {shipping === 0 ? 'Free' : `₹ ${shipping.toFixed(2)}`}
          </Text>
        </Box>

        <Box
          borderTopWidth={1}
          borderColor="border"
          marginVertical="m"
        />

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text variant="subtitle">
            Total
          </Text>

          <Text variant="subtitle" color="primary">
            ₹ {total.toFixed(2)}
          </Text>
        </Box>
      </Box>

      <Box marginTop="xl">
        <CustomButton
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </Box>

      <Box
        marginTop="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Ionicons
          name="shield-checkmark-outline"
          size={18}
          color={theme.colors.primary}
        />

        <Text
          marginLeft="xs"
          variant="small"
          color="textSecondary"
        >
          Secure payments • Easy Returns • 100% Authentic
        </Text>
      </Box>
    </Box>
  </>
);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}
    >
      <Box flex={1} paddingLeft="l" paddingRight="l">
        <Text variant="heading">My Cart ({cart.length})</Text>

        {cart.length === 0 ? (
          <Box flex={1} marginTop="xxxl" alignItems="center">
            <Box
              height={DeviceHelper.calHeight(60)}
              width={DeviceHelper.calWidth(60)}
              backgroundColor="white"
              borderColor="tabgray"
              borderWidth={2}
              borderRadius="m"
              justifyContent="center"
              alignItems="center"
            >
              <Ionicons
                name="bag-outline"
                size={DeviceHelper.calWidth(30)}
                color={theme.colors.primary}
              />
            </Box>

            <Text marginTop="m" variant="button">
              Your Cart is Empty
            </Text>

            <Text marginTop="s" variant="medium" textAlign="center">
              Add your favorite products to start shopping.
            </Text>

            <Box width={DeviceHelper.calWidth(180)} marginTop="m">
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
                  onIncrease={() => increaseQuantity(item.product.id)}
                  onDecrease={() => decreaseQuantity(item.product.id)}
                  onRemove={() => removeFromCart(item.product.id)}
                />
              )}
              ListFooterComponent={renderFooter}
              contentContainerStyle={{
                paddingBottom: tabBarHeight + DeviceHelper.calHeight(20),
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

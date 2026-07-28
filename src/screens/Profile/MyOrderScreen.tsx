/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { Box, HeaderBack, MyOrderCard, Text } from '@src';
import { products } from '../../data/produts';
import { OrderContext } from '@src/context/OrderContext';
import theme from '@src/theme/theme';

const MyOrderScreen = () => {
  const { orders, loadOrders } = useContext(OrderContext);
  useFocusEffect(
    React.useCallback(() => {
      loadOrders();
    }, [loadOrders]),
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
      }}
    >
      <Box flex={1} paddingLeft="l" paddingRight="l">
        {/* Header */}
        <HeaderBack title="Order" />

        {/* Orders */}
        <Box marginTop="l" flex={1}>
          {orders.length === 0 ? (
            <Box flex={1} marginTop="xxxl" alignItems="center">
              <Text variant="subtitle">No Orders Yet</Text>

              <Text variant="medium" marginTop="s" color="textSecondary">
                Your purchased products will appear here.
              </Text>
            </Box>
          ) : (
            <FlatList
              data={orders}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                console.log('FULL ORDER:', item);

                const orderItem = item.items[0];
                const product = products.find(
                  p => p.id === orderItem?.productId,
                );
                console.log('ORDER PRODUCT:', orderItem);

                return (
                  <MyOrderCard
                    orderId={item._id}
                    status={item.status}
                    image={product?.image}
                    title={orderItem?.name || ''}
                    quantity={orderItem?.quantity || 0}
                    date={item.createdAt}
                    total={item.total}
                  />
                );
              }}
            />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default MyOrderScreen;

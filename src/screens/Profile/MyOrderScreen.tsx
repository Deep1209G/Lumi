/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box, HeaderBack, MyOrderCard, Text } from '@src';

import { OrderContext } from '@src/context/OrderContext';

const MyOrderScreen = () => {
  const { orders } = useContext(OrderContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingLeft="l" paddingRight="l">
        {/* Header */}
        <HeaderBack title="Order" />

        {/* Orders */}
        <Box marginTop="l" flex={1}>
          {orders.length === 0 ? (
            <Box flex={1} marginTop='xxxl' alignItems="center">
              <Text variant="subtitle">No Orders Yet</Text>

              <Text variant="medium" marginTop="s" color="textSecondary">
                Your purchased products will appear here.
              </Text>
            </Box>
          ) : (
            <FlatList
              data={orders}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <MyOrderCard
                  orderId={item.id}
                  status={item.status}
                  image={item.item.product.image}
                  title={item.item.product.title}
                  quantity={item.item.quantity}
                  date={item.date}
                  total={item.total}
                />
              )}
            />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default MyOrderScreen;

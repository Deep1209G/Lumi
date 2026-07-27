/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';

import {
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  WishlistScreen,
  MyCartScreen,
  Box,
} from '@src';

import theme from '@src/theme/theme';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, focused: boolean) => {
  let iconName: keyof typeof Ionicons.glyphMap;

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;

    case 'Search':
      iconName = focused ? 'search' : 'search-outline';
      break;

    case 'Wishlist':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    case 'Cart':
      iconName = focused ? 'cart' : 'cart-outline';
      break;

    case 'Profile':
      iconName = focused ? 'person' : 'person-outline';
      break;

    default:
      iconName = 'ellipse-outline';
  }

  return (
    <Box height={45} width={45} justifyContent="center" alignItems="center">
      <Ionicons
        name={iconName}
        size={24}
        color={focused ? theme.colors.primary : theme.colors.icon}
      />

      {focused && (
        <Box
          style={{
            position: 'absolute',
            bottom: -1,
            width: 28,
            height: 3,
            borderRadius: 20,
            backgroundColor: theme.colors.primary,
          }}
        />
      )}
    </Box>
  );
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarShowLabel: false,

        animation: 'shift',

        tabBarButton: ({ children, onPress, onLongPress, style }) => (
          <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={style}
            android_ripple={{
              color: 'transparent',
            }}
          >
            {children}
          </Pressable>
        ),

        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 20,
          marginBottom: 25,
          height: 65,
          borderRadius: theme.borderRadii.l,
          backgroundColor: theme.colors.white,
          // Border
          borderWidth: 1.5,
          borderColor:theme.colors.tabgray,
          // Android shadow
          elevation: 5,
          // iOS shadow
          shadowColor: theme.colors.primary,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,

          // Keep rounded corners
          overflow: 'hidden',

          paddingTop: 10,
          paddingBottom: 10,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarIcon: ({ focused }) => getTabIcon(route.name, focused),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={MyCartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

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
import { DeviceHelper } from '@src/utils';

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
    <Box height={DeviceHelper.calHeight(45)} width={DeviceHelper.calWidth(45)} justifyContent="center" alignItems="center">
      <Ionicons
        name={iconName}
        size={DeviceHelper.calWidth(24)}
        color={focused ? theme.colors.primary : theme.colors.icon}
      />

      {focused && (
        <Box
          style={{
            position: 'absolute',
            bottom: -1,
            width: DeviceHelper.calWidth(28),
            height: 3,
            borderRadius: DeviceHelper.calWidth(20),
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
          marginHorizontal: DeviceHelper.calWidth(20),
          marginBottom: DeviceHelper.calHeight(25),
          height: DeviceHelper.calHeight(65),
          borderRadius: theme.borderRadii.l,
          backgroundColor: theme.colors.white,
          borderWidth: 1,
          borderColor: theme.colors.tabgray,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          overflow: 'hidden',
          paddingTop: DeviceHelper.calHeight(10),
          paddingBottom: DeviceHelper.calHeight(10),
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

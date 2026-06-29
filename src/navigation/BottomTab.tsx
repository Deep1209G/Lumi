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

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, focused: boolean) => {
  let iconName: keyof typeof Ionicons.glyphMap;

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;

    case 'Search':
      iconName = 'search-outline';
      break;

    case 'Wishlist':
      iconName = 'heart-outline';
      break;

    case 'Cart':
      iconName = 'cart-outline';
      break;

    case 'Profile':
      iconName = 'person-outline';
      break;

    default:
      iconName = 'ellipse-outline';
  }

  return (
    <Box
      width={40}
      height={40}
      justifyContent="center"
      alignItems="center"
      style={{
        borderRadius: 10,
        backgroundColor: focused ? 'black' : 'white',
      }}
    >
      <Ionicons name={iconName} size={22} color={focused ? 'white' : 'black'} />
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
            android_ripple={{ color: 'transparent' }}
          >
            {children}
          </Pressable>
        ),

        tabBarStyle: {
          position: 'absolute',
          alignItems: 'center',
          height: 80,
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 30,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
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

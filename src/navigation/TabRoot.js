import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import WishlistScreen from '../screens/main/WishlistScreen';
import CartScreen from '../screens/main/CartScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfileScreen from '../screens/main/UserProfileScreen';
import UserProfileRoot from './UserProfileRoot';

const Tab = createMaterialBottomTabNavigator();

const TabRoot = () => {
  return (
    <Tab.Navigator
      barStyle={styles.tabStyle}
      labeled={false}
      screenOptions={{
        tabBarBackground: () => (
          <View tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={26} />,
          tabBarColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name="WishlistTab"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => <Icon name="heart" size={26} />,
          tabBarLabel: 'Wishlist',
          tabBarColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Icon name="cart" size={26} />,
          tabBarLabel: 'Cart',
          tabBarColor: '#ffffff',
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'blue'},
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserProfileRoot}
        options={{
          tabBarIcon: () => <Icon name="account" size={28} />,
          tabBarLabel: 'User',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#ffffff',
  },
});

export default TabRoot;

import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/main/CategoriesScreen';
import TabRoot from './TabRoot';
import AdminApp from '../screens/AdminPanel';

const Drawer = createDrawerNavigator();

const DrawerRoot = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={TabRoot}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Admin" component={AdminApp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoot;

// const styles = StyleSheet.create({})

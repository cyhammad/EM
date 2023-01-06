import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/main/HomeScreen';
import CategoriesScreen from '../screens/main/CategoriesScreen';
import TabRoot from './TabRoot';

const Drawer = createDrawerNavigator();

const DrawerRoot = ({user}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabRoot} />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoot;

// const styles = StyleSheet.create({})

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="app">
        <Drawer.Screen
          name="app"
          component={StackNavigation}
          options={{title: 'The movie app'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

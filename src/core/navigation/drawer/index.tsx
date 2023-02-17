import React from 'react';

import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { HomeStack } from '../botttomTab/homeStack';
import { DrawerMenu } from './DrawerMenu';
import { drawerStyles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../../features/home/screens/Home';
import { DrawersRoutes } from './routes';

const Drawer = createDrawerNavigator();

const SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerStyle: drawerStyles.drawer,
  overlayColor: 'transparent',
  sceneContainerStyle: drawerStyles.sceneContainer,
  headerShown: false,
};

export function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={SCREEN_OPTIONS}
        drawerContent={props => <DrawerMenu {...props} />}>
        {DrawersRoutes.map(route => (
          <Drawer.Screen
            name={route.name}
            key={route.name}
            component={route.component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

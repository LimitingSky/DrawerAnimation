import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { drawerStyles } from '../drawer/styles';
import colors from '../../../core/constants/colors';
import { BottomTabRoutes } from './Routes';
import { BottomTabMenu } from './BottomTabMenu';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  const drawerProgress = useDrawerProgress();

  const barStyle = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, 10]);
    const height = interpolate(drawerProgress.value, [0, 1], [100, 0]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 100]);

    return {
      transform: [{ rotate: `-${rotate}deg` }, { translateX }],
      backgroundColor: colors.grey,
      height: `${height}%`,
      position: 'absolute',
    };
  });

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      tabBar={props => <BottomTabMenu {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: barStyle,
      }}>
      {BottomTabRoutes.map(routers => (
        <Tab.Screen
          name={routers.name}
          key={routers.name}
          component={routers.component}
        />
      ))}
    </Tab.Navigator>
  );
}

import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { DrawerViewProps } from '../models';
import { SafeAreaView, View } from 'react-native';

export const DrawerView: DrawerViewProps = ({ children, style }) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, 10]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 60]);
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 30]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30]);
    return {
      flex: 1,
      borderRadius,
      transform: [{ rotate: `-${rotate}deg` }, { translateX }, { translateY }],
      backgroundColor: 'white',
    };
  });
  return (
    <Animated.View style={animatedStyles}>
      <View style={style}>{children}</View>
    </Animated.View>
  );
};

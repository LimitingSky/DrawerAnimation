import React from 'react';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useAnimatedWrapper } from '../providers/AnimatedDrawer';
import { TReactFC } from './models';

export const NavigationWrapper: TReactFC = ({ children }) => {
  const drawerProgress = useAnimatedWrapper();
  const topSafeArea = 35;

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, topSafeArea],
    );
    return {
      transform: [{ translateY }],
      flex: 1,
    };
  });

  return <Animated.View style={[animatedStyles]}>{children}</Animated.View>;
};

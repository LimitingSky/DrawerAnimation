import React, { useEffect } from 'react';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
  useDrawerStatus,
} from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAnimatedWrapper } from '../../providers/AnimatedDrawer';
import { drawerStyles } from './styles';
import { DrawersRoutes } from './routes';

export const DrawerMenu: React.FC<DrawerContentComponentProps> = props => {
  const { state, navigation } = props;
  const isDrawerOpen = useDrawerStatus();
  const drawerProgress = useAnimatedWrapper();

  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const borderTopLeftRadius = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 30],
    );
    return { borderTopLeftRadius };
  });

  useEffect(() => {
    drawerProgress.change(progress.value);
  }, [progress.value]);

  useEffect(() => {
    drawerProgress.change(isDrawerOpen === 'open' ? 1 : 0);
  }, [isDrawerOpen]);

  return (
    <Animated.View style={[animatedStyles, drawerStyles.menuWrapper]}>
      <Text style={drawerStyles.menuTitle}>Beka</Text>
      {DrawersRoutes.map((route, index) => {
        const isSelected = state.index === index;
        return (
          <View key={route.name}>
            {route.hasDivider && (
              <View style={drawerStyles.menuItemSeparator} />
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate(route.name)}
              style={[
                drawerStyles.menuItemWrapper,
                isSelected && drawerStyles.menuItemWrapperSelected,
              ]}>
              <Text
                style={[
                  drawerStyles.menuItemText,
                  isSelected && drawerStyles.menuItemTextSelected,
                ]}>
                {route.menuLabel}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </Animated.View>
  );
};

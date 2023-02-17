import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { TabBarStyles } from './styles';
import { BottomTabRoutes } from './Routes';

export const BottomTabMenu: React.FC<BottomTabBarProps> = props => {
  const { state, navigation } = props;
  const drawerProgress = useDrawerStatus();

  if (drawerProgress === 'open') {
    return null;
  }

  return (
    <View style={TabBarStyles.wrapper}>
      <SafeAreaView>
        <View style={TabBarStyles.itemsContainer}>
          {BottomTabRoutes.map((route, index) => {
            const isSelected = state.index === index;
            return (
              <TouchableOpacity
                key={route.name}
                onPress={() => navigation.navigate(route.name)}
                style={[
                  TabBarStyles.itemWrapper,
                  isSelected && TabBarStyles.itemWrapperSelected,
                ]}>
                <Text style={TabBarStyles.text}>{route.menuLabel}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

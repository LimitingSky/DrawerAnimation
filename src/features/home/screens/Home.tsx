import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import IconMenu from '../../../core/components/icons/menu';
import { DrawerView } from '../../../core/navigation/drawer/DrawerView';
import { HomeStyles } from './HomeStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <DrawerView style={HomeStyles.wrapper}>
      <SafeAreaView>
        <View style={HomeStyles.headerWrapper}>
          <TouchableOpacity
            style={HomeStyles.menuButton}
            onPress={() => navigation.toggleDrawer()}>
            <IconMenu style={HomeStyles.icon} />
          </TouchableOpacity>
          <Text style={HomeStyles.titleText}>Start</Text>
        </View>
      </SafeAreaView>
    </DrawerView>
  );
};

export default HomeScreen;

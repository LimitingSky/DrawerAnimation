import React from 'react';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AnimatedProvider } from '../providers/AnimatedDrawer';
import { DrawerNavigation } from './drawer';
import { NavigationWrapper } from './wrapper';

const App = () => {
  return (
    <AnimatedProvider>
      <NavigationWrapper>
        <DrawerNavigation />
      </NavigationWrapper>
    </AnimatedProvider>
  );
};

export default App;

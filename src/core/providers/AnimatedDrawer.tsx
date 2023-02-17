import React, { createContext, useContext, useState } from 'react';
import { View } from 'react-native';
import { TAnimatedContext, TReactFC } from '../navigation/models';
import { providerStyles } from './styles';

const AnimationContext = createContext<TAnimatedContext>({
  value: 0,
  change: () => null,
});

export const AnimatedProvider: TReactFC = props => {
  const [drawerProgress, setDrawerProgress] = useState<number>(0);

  return (
    <AnimationContext.Provider
      value={{
        value: drawerProgress,
        change: setDrawerProgress,
      }}>
      <View style={providerStyles.wrapper}>{props.children}</View>
    </AnimationContext.Provider>
  );
};

export const useAnimatedWrapper = () => useContext(AnimationContext);

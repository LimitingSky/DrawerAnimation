import React, { Dispatch, SetStateAction } from 'react';
import { ViewProps } from 'react-native';

export type TAnimatedContext = {
  value: number;
  change: Function | Dispatch<SetStateAction<number>>;
};

type TReactFCProps = {
  children: React.ReactNode;
};

export type TReactFC = React.FC<TReactFCProps>;

export type DrawerViewProps = React.FC<ViewProps>;

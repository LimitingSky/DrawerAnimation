import HomeScreen from '../../../features/home/screens/Home';

const enum HOME_TAB_BAR_ROUTES {
  SCREEN_A = 'SCREEN A',
  SCREEN_B = 'SCREEN B',
}

export const BottomTabRoutes = [
  {
    name: HOME_TAB_BAR_ROUTES.SCREEN_A,
    component: HomeScreen,
    menuLabel: 'Screen A',
  },
  {
    name: HOME_TAB_BAR_ROUTES.SCREEN_B,
    component: HomeScreen,
    menuLabel: 'SCreen B',
  },
];

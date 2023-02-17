import HomeScreen from '../../../features/home/screens/Home';
import { HomeTabs } from '../botttomTab/homeStack';

const enum DRAWER_ROUTES {
  HOME_DRAWER = 'Home',
  CART_DRAWER = 'Cart',
  FAVORITES_DRAWER = 'Favorites',
  ORDERS_DRAWER = 'Orders',
  SING_OUT_DRAWER = 'SingOut',
}

export const DrawersRoutes = [
  {
    name: DRAWER_ROUTES.HOME_DRAWER,
    component: HomeTabs,
    menuLabel: 'Start',
    hasDivider: false,
  },
  {
    name: DRAWER_ROUTES.CART_DRAWER,
    component: HomeScreen,
    menuLabel: 'Your Cart',
    hasDivider: false,
  },
  {
    name: DRAWER_ROUTES.FAVORITES_DRAWER,
    component: HomeScreen,
    menuLabel: 'Favourites',
    hasDivider: false,
  },
  {
    name: DRAWER_ROUTES.ORDERS_DRAWER,
    component: HomeScreen,
    menuLabel: 'Your Orders',
    hasDivider: false,
  },
  {
    name: DRAWER_ROUTES.SING_OUT_DRAWER,
    component: HomeScreen,
    menuLabel: 'Sing Out',
    hasDivider: true,
  },
];

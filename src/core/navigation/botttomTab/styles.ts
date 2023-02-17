import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const TabBarStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.bg,
    paddingVertical: 10,
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemWrapperSelected: {
    backgroundColor: colors.itemSelected,
  },
  itemWrapper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

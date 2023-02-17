import { StyleSheet } from 'react-native';
import colors from '../../../core/constants/colors';

export const HomeStyles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuButton: {
    padding: 4,
    marginRight: 10,
  },
  icon: {
    color: colors.grey,
  },
  titleText: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

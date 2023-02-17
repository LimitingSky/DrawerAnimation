import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const drawerStyles = StyleSheet.create({
  drawer: {
    backgroundColor: colors.white,
    width: '50%',
  },
  sceneContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  menuWrapper: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.bg,
    flex: 1,
  },
  menuTitle: {
    marginVertical: 40,
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    alignSelf: 'center',
  },
  menuItemWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  menuItemWrapperSelected: {
    backgroundColor: colors.itemSelected,
  },
  menuItemText: {
    color: colors.white,
    fontSize: 20,
  },
  menuItemTextSelected: {
    color: colors.textSelected,
    fontWeight: 'bold',
  },
  menuItemSeparator: {
    marginVertical: 30,
    width: '100%',
    height: 1,
    borderRadius: 4,
    backgroundColor: colors.white,
    opacity: 0.2,
  },
});

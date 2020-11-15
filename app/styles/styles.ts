import { StyleSheet } from 'react-native';
import colors from './colors';

export default {
  buttons: StyleSheet.create({
    primary: {
      flex: 1,
      height: 70,
      width: '100%',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      position: 'absolute',
    }
  }),
}
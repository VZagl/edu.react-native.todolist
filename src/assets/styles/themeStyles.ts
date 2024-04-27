import {StyleSheet, Platform} from 'react-native';

export const themeStyles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  theme: {
    // top: Platform.OS === 'android' ? 20 : 50,
    backgroundColor: '#eee',
    color: 'black',
    // barStyle: 'light-content',
  },
  themeDark: {
    // top: Platform.OS === 'android' ? 40 : 100,
    backgroundColor: '#444',
    color: 'yellow',
    // barStyle: 'dark-content',
  },
  themeLight: {},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  containerColumn: {
    flex: 1,
    flexDirection: 'column',
  },
});

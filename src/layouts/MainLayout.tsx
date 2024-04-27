import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {themeStyles} from '~/assets/styles/themeStyles';
import PageTodo from '~/pages/PageTodo';

export default function (): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        themeStyles.theme,
        // backgroundStyle
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <View style={[themeStyles.theme, styles.main]}>
        {/* <Page1 /> */}
        <PageTodo />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    // color: 'blue',
  },
});

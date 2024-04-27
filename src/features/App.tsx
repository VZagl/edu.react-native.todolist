/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import {themeStyles} from '~/assets/styles/themeStyles';
import MainLayout from '~/layouts/MainLayout';

export default function (): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    themeStyles.themeLight = themeStyles.theme;
  }, []);

  useEffect(() => {
    themeStyles.theme = isDarkMode
      ? themeStyles.themeDark
      : themeStyles.themeLight;
  }, [isDarkMode]);

  // разместить ContextProvider для смены темы
  return <MainLayout />;
}

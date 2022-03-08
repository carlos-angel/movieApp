import {LogBox, StatusBar} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import React from 'react';
import Navigation from 'navigations/Navigation';
import {darkThemePaper, defaultThemePaper, darkThemeNavigation} from 'utils';

LogBox.ignoreLogs(['react-native-gesture-handler']);

export default function App() {
  DefaultThemePaper.colors = defaultThemePaper(DefaultThemePaper.colors);
  DarkThemePaper.colors = darkThemePaper(DarkThemePaper.colors);
  DarkThemeNavigation.colors = darkThemeNavigation(DarkThemeNavigation.colors);

  return (
    <PaperProvider theme={DarkThemePaper}>
      <NavigationContainer theme={DarkThemeNavigation}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

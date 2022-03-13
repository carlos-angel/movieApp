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
import React, {useMemo, useState} from 'react';
import Navigation from 'navigations/Navigation';
import {darkThemePaper, defaultThemePaper, darkThemeNavigation} from 'utils';
import {ProviderPreferences} from 'context/preferences.context';

LogBox.ignoreLogs(['react-native-gesture-handler']);

export default function App() {
  const [theme, setTheme] = useState('dark');
  DefaultThemePaper.colors = defaultThemePaper(DefaultThemePaper.colors);
  DarkThemePaper.colors = darkThemePaper(DarkThemePaper.colors);
  DarkThemeNavigation.colors = darkThemeNavigation(DarkThemeNavigation.colors);

  const isDarkTheme = theme === 'dark';

  const toggleTheme = () =>
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));

  const preferences = useMemo(
    () => ({toggleTheme, theme, isDarkTheme}),
    [theme, isDarkTheme],
  );

  return (
    <ProviderPreferences value={preferences}>
      <PaperProvider theme={isDarkTheme ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer
          theme={isDarkTheme ? DarkThemeNavigation : DefaultThemeNavigation}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </ProviderPreferences>
  );
}

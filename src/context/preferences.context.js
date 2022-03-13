import {createContext} from 'react';

export const PreferencesContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  isDarkTheme: true,
});

export const {Provider: ProviderPreferences} = PreferencesContext;

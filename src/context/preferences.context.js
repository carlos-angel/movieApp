import {createContext} from 'react';

export const PreferencesContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const {Provider: ProviderPreferences} = PreferencesContext;

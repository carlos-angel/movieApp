import {createContext} from 'react';

export const PreferencesContext = createContext({
  theme: 'dark',
  ToggleThem: () => {},
});

export const {Provider: ProviderPreferences} = PreferencesContext;

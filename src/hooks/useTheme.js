import {useContext} from 'react';
import {PreferencesContext} from 'context/preferences.context';

export const useTheme = () => useContext(PreferencesContext);

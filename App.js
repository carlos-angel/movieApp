import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import Navigation from 'navigations/Navigation';

LogBox.ignoreLogs(['react-native-gesture-handler']);

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

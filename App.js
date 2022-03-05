import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import React from 'react';

export default function App() {
  console.log('hello debugger');
  return (
    <PaperProvider>
      <SafeAreaView>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}

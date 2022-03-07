import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Notifications')}>
        Go to notifications
      </Button>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('hello debugger');
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

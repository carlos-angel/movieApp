import {SafeAreaView, LogBox} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

LogBox.ignoreLogs(['react-native-gesture-handler']);

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

const Drawer = createDrawerNavigator();

export default function App() {
  console.log('hello debugger');
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

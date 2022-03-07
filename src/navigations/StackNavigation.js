import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Movie, Popular, News, Search} from 'screens';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'The movie App'}}
      />
      <Stack.Screen name="movie" component={Movie} />
      <Stack.Screen
        name="news"
        component={News}
        options={{title: 'Nuevas Películas'}}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{title: 'Películas populares'}}
      />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
}

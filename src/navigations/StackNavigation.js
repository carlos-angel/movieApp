import React from 'react';
import {IconButton} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Movie, Popular, News, Search} from 'screens';

const Stack = createNativeStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const menuLeft = ({isGoBack}) => {
    if (isGoBack) {
      return (
        <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
      );
    }
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  const menuRight = () => (
    <IconButton icon="magnify" onPress={() => navigation.navigate('search')} />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'The movie App',
          headerLeft: () => menuLeft({isGoBack: false}),
          headerRight: () => menuRight(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => menuLeft({isGoBack: true}),
          headerRight: () => menuRight(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: 'Nuevas Películas',
          headerLeft: () => menuLeft({isGoBack: true}),
          headerRight: () => menuRight(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Películas populares',
          headerLeft: () => menuLeft({isGoBack: false}),
          headerRight: () => menuRight(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: '',
          headerLeft: () => menuLeft({isGoBack: true}),
        }}
      />
    </Stack.Navigator>
  );
}

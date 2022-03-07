import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

export default function DrawerContent({navigation}) {
  const [activeScreen, setActiveScreen] = useState('home');

  const navigateScreen = screen => {
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Inicio"
          active={activeScreen === 'home'}
          onPress={() => navigateScreen('home')}
        />
        <Drawer.Item
          label="Películas Populares"
          active={activeScreen === 'popular'}
          onPress={() => navigateScreen('popular')}
        />
        <Drawer.Item
          label="Nuevas Películas"
          active={activeScreen === 'news'}
          onPress={() => navigateScreen('news')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

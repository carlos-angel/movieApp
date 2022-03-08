import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, StyleSheet} from 'react-native';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';
import {useTheme} from 'hooks/useTheme';

export default function DrawerContent({navigation}) {
  const [activeScreen, setActiveScreen] = useState('home');
  const {theme, toggleTheme} = useTheme();
  const isDarkTheme = theme === 'dark';

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
      <Drawer.Section title="Opciones">
        <TouchableRipple>
          <View style={styles.theme}>
            <Text>Tema Oscuro</Text>
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  theme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

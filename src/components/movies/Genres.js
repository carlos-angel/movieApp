import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import map from 'lodash/map';

export default function Genres({data, size, style}) {
  let styleSize;
  switch (size) {
    case 'small':
      styleSize = {fontSize: 11, marginRight: 5};
      break;
    case 'medium':
      styleSize = {fontSize: 16, marginRight: 15};
      break;
  }

  return (
    <View style={style ?? styles.genres}>
      {map(data, ({id, name}) => (
        <Text key={id} style={[styles.genre, styleSize]} numberOfLines={2}>
          {name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {flexDirection: 'row'},
  genre: {color: '#8697a5'},
});

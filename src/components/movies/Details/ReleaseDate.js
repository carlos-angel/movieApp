import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

export default function ReleaseDate({releaseDate}) {
  return <Text style={styles.releaseDate}>{releaseDate}</Text>;
}

const styles = StyleSheet.create({
  releaseDate: {
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
});

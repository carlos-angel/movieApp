import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

export default function Overview({text}) {
  return <Text style={styles.overview}>{text}</Text>;
}

const styles = StyleSheet.create({
  overview: {
    marginHorizontal: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
});

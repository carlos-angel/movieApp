import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';

export default function Play({onPress}) {
  return (
    <View style={styles.viewPlay}>
      <IconButton
        icon="play"
        color="#000"
        size={30}
        style={styles.play}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  play: {
    backgroundColor: '#fff',
    marginTop: -40,
    marginRight: 30,
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});

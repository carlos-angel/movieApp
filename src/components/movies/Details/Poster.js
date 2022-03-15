import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

export default function Poster({uri}) {
  return (
    <View style={styles.viewPoster}>
      <Image
        style={styles.poster}
        source={{uri}}
        resizeMethod="scale"
        resizeMode="stretch"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },
  poster: {
    width: '100%',
    height: 545,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

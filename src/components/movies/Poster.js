import React from 'react';
import {StyleSheet, Image, View, TouchableWithoutFeedback} from 'react-native';
import {Text} from 'react-native-paper';
import endpoints from 'services/api';

export default function Poster(props) {
  const {navigation, posterPath, title, id, width, height} = props;

  const isExistPosterPath = !!posterPath;
  const poster_uri = endpoints.image.w500(posterPath);
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('movie', {id})}>
      <View style={[styles.movie, {width, height}]}>
        {isExistPosterPath && (
          <Image style={styles.image} source={{uri: poster_uri}} />
        )}
        {!isExistPosterPath && <Text>{title}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  movie: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

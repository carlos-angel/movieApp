import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Title, Text} from 'react-native-paper';
import map from 'lodash/map';
import size from 'lodash/size';
import endpoints from 'services/api';

export default function MovieVerticalItem(props) {
  const {title, poster_path, genres} = props;
  const uri_poster = endpoints.image.w500(poster_path);

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: uri_poster}} />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {map(genres, (genre, index) => (
            <Text key={index} style={styles.genre}>
              {`${genre}${index + 1 !== size(genres) ? ', ' : ''}`}
            </Text>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 12,
    color: '#8997a5',
  },
});

import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import endpoints from 'services/api';

export default function CardMovie(props) {
  const {id, title, poster_path, navigation} = props;
  const uri_poster = endpoints.image.w500(poster_path);

  const goMovie = () => navigation.navigate('movie', {id, title});

  return (
    <TouchableWithoutFeedback onPress={goMovie}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: uri_poster}} />
        <Title style={styles.title} numberOfLines={1}>
          {title}
        </Title>
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
    width: '85%',
    height: 170,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
});

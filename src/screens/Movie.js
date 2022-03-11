/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getDetailMovie} from 'services/movies/get-detail-movie';
import endpoints from 'services/api';
import Loading from 'components/common/Loading';

export default function Movie({route, navigation}) {
  const [movie, setMovie] = useState(null);
  const {id} = route.params;

  useEffect(() => {
    getDetailMovie(id)
      .then(data => setMovie(data))
      .catch(() => navigation.goBack());
  }, [id]);

  if (!movie) {
    return <Loading message="cargando película" />;
  }

  const {poster_path} = movie;
  const poster_uri = endpoints.image.w500(poster_path);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewPoster}>
          <Image
            style={styles.poster}
            source={{uri: poster_uri}}
            resizeMethod="scale"
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    </>
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

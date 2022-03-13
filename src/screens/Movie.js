/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Text, Title, IconButton} from 'react-native-paper';
import {getDetailMovie} from 'services/movies/get-detail-movie';
import endpoints from 'services/api';
import Loading from 'components/common/Loading';
import ModalVideo from 'components/common/ModalVideo';
import map from 'lodash/map';
import Rating from 'components/common/Rating';

export default function Movie({route, navigation}) {
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const {id} = route.params;

  useEffect(() => {
    getDetailMovie(id)
      .then(data => setMovie(data))
      .catch(() => navigation.goBack());
  }, [id]);

  if (!movie) {
    return <Loading message="cargando película" />;
  }

  const {
    poster_path,
    title,
    genres,
    vote_average,
    vote_count,
    overview,
    release_date,
  } = movie;

  const poster_uri = endpoints.image.w500(poster_path);
  const media = vote_average / 2;

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
        <View style={styles.viewPlay}>
          <IconButton
            icon="play"
            color="#000"
            size={30}
            style={styles.play}
            onPress={() => setShowVideo(true)}
          />
        </View>
        <View style={styles.viewInformation}>
          <Title>{title}</Title>
          <View style={styles.genres}>
            {map(genres, genre => (
              <Text key={genre.id} style={styles.genre}>
                {genre.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.viewRating}>
          <Rating startingValue={media} imageSize={20} />
          <Text style={styles.votes}>{`${vote_count} votos`}</Text>
        </View>
        <Text style={styles.overview}>{overview}</Text>
        <Text
          style={
            styles.releaseDate
          }>{`Fecha de lanzamiento: ${release_date}`}</Text>
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
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
  viewInformation: {
    marginHorizontal: 30,
  },
  genres: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 15,
    color: '#8697a5',
  },
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  votes: {
    fontSize: 12,
  },
  overview: {
    marginHorizontal: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
  releaseDate: {
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'justify',
    color: '#8697a5',
  },
});

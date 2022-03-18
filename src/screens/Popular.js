import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Title} from 'react-native-paper';
import map from 'lodash/map';
import {getPopularMovies} from 'services/movies/get-popular-movies';
import Loading from 'components/common/Loading';
import endpoints from 'services/api';
import Rating from 'components/common/Rating';
import defaultImage from 'assets/png/default-image.png';
import {useMovies} from 'hooks/useMovies';
import ButtonLoadMore from 'components/common/ButtonLoadMore';

export default function Popular({navigation}) {
  const [movies, loading, page, moreMovies] = useMovies(getPopularMovies);

  if (loading && page === 1) {
    return <Loading message="cargando películas" />;
  }

  return (
    <ScrollView>
      {map(movies, movie => {
        const {id, poster_path, title, release_date, vote_count, vote_average} =
          movie;

        const media = vote_average / 2;
        const uri = endpoints.image.w500(poster_path);

        return (
          <TouchableWithoutFeedback
            key={id}
            onPress={() => navigation.navigate('movie', {id})}>
            <View style={styles.movie}>
              <View style={styles.left}>
                <Image
                  style={styles.poster}
                  source={poster_path ? {uri} : defaultImage}
                />
              </View>
              <View>
                <Title style={styles.title}>{title}</Title>
                <Text>{release_date}</Text>
                <View style={styles.viewRating}>
                  <Rating startingValue={media} imageSize={20} />
                  <Text style={styles.votes}>{`${vote_count} votos`}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}

      <ButtonLoadMore disabled={loading} loading={loading} onPress={moreMovies}>
        cargar más películas
      </ButtonLoadMore>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  movie: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: 250,
    fontSize: 18,
  },
  left: {
    marginRight: 20,
  },
  poster: {
    width: 100,
    height: 150,
  },
  viewRating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  votes: {
    fontSize: 12,
    color: '#8697a5',
    marginTop: 5,
  },
});

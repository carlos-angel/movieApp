import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {getNewsMovies} from 'services/movies/get-news-movies';
import {Button} from 'react-native-paper';
import {useMovies} from 'hooks/useMovies';
import {useTheme} from 'hooks/useTheme';
import map from 'lodash/map';
import endpoints from 'services/api';
import Loading from 'components/common/Loading';
import defaultImage from 'assets/png/default-image.png';

const {width} = Dimensions.get('window');

export default function News({navigation}) {
  const [movies, loading, page, moreMovies] = useMovies(getNewsMovies);
  const {isDarkTheme} = useTheme();

  if (loading && page === 1) {
    return <Loading message="cargando películas" />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {map(movies, movie => (
          <Movie key={movie.id} {...movie} navigation={navigation} />
        ))}
      </View>
      <Button
        disabled={loading}
        loading={loading}
        onPress={moreMovies}
        mode="contained"
        contentStyle={styles.buttonMoreMovies}
        style={styles.loadMoreMovies}
        labelStyle={
          isDarkTheme ? styles.labelButtonDark : styles.labelButtonLight
        }>
        cargar más películas
      </Button>
    </ScrollView>
  );
}

function Movie(props) {
  const {id, poster_path, navigation} = props;
  const poster_uri = endpoints.image.w500(poster_path);
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('movie', {id})}>
      <View style={styles.movie}>
        <Image
          style={styles.poster}
          source={poster_path ? {uri: poster_uri} : defaultImage}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movie: {
    width: width / 2,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  buttonMoreMovies: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  loadMoreMovies: {
    backgroundColor: 'transparent',
  },
  labelButtonDark: {
    color: '#fff',
  },
  labelButtonLight: {
    color: '#000',
  },
});

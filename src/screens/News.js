import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {getNewsMovies} from 'services/movies/get-news-movies';
import {Button} from 'react-native-paper';
import {useMovies} from 'hooks/useMovies';
import {useTheme} from 'hooks/useTheme';
import map from 'lodash/map';
import Loading from 'components/common/Loading';
import Poster from 'components/movies/Poster';

const {width} = Dimensions.get('window');
const widthPoster = width / 2;

export default function News({navigation}) {
  const [movies, loading, page, moreMovies] = useMovies(getNewsMovies);
  const {isDarkTheme} = useTheme();

  if (loading && page === 1) {
    return <Loading message="cargando películas" />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {map(movies, ({id, title, poster_path}) => (
          <Poster
            key={id}
            navigation={navigation}
            posterPath={poster_path}
            title={title}
            id={id}
            height={300}
            width={widthPoster}
          />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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

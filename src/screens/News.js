import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {getNewsMovies} from 'services/movies';
import {useMovies} from 'hooks/useMovies';
import map from 'lodash/map';
import Loading from 'components/common/Loading';
import Poster from 'components/movies/Poster';
import ButtonLoadMore from 'components/common/ButtonLoadMore';

const {width} = Dimensions.get('window');
const widthPoster = width / 2;

export default function News({navigation}) {
  const [movies, loading, page, moreMovies] = useMovies(getNewsMovies);

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
      <ButtonLoadMore disabled={loading} loading={loading} onPress={moreMovies}>
        cargar más películas
      </ButtonLoadMore>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

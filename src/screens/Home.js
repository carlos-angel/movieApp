import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title, Text} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import map from 'lodash/map';
import {getNewsMovies, getGenres, getGenreMovies} from 'services/movies';
import MovieVerticalItem from 'components/movies/MovieVerticalItem';
import CardMovie from 'components/movies/CardMovie';
import {useMovies} from 'hooks/useMovies';
import Loading from 'components/common/Loading';

const {width} = Dimensions.get('window');
const ITEM_WIDTH_CAROUSEL_GENRE_MOVIES = Math.round(width * 0.3);
const ITEM_WIDTH_CAROUSEL_NEWS_MOVIES = Math.round(width * 0.7);

export default function Home({navigation}) {
  const [newsMovies, loadingNewsMovies] = useMovies(getNewsMovies);
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(null);
  const [moviesForGenre, setMoviesForGenre] = useState([]);

  const onChangeGenre = id => setGenreSelected(id);

  useEffect(() => {
    getGenres()
      .then(({data}) => {
        setGenres({data});
        onChangeGenre(data[0].id);
      })
      .catch(() => setGenres([]));
  }, []);

  useEffect(() => {
    if (genreSelected) {
      getGenreMovies({genreId: genreSelected})
        .then(({data}) => setMoviesForGenre(data.results))
        .catch(() => setGenreSelected([]));
    }
  }, [genreSelected]);

  if (loadingNewsMovies) {
    return <Loading message="cargando películas" />;
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {newsMovies && (
        <View style={styles.newsMovies}>
          <Title style={styles.title}>Nuevas Películas</Title>
          <Carousel
            sliderWidth={width}
            itemWidth={ITEM_WIDTH_CAROUSEL_NEWS_MOVIES}
            layout="default"
            data={newsMovies}
            renderItem={({item}) => (
              <MovieVerticalItem {...item} navigation={navigation} />
            )}
          />
        </View>
      )}

      <View style={styles.viewGenres}>
        <Title style={styles.genresTitle}>Películas por genero</Title>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genres}>
          {map(genres, ({id, name}) => {
            const styleColor = {
              color: id !== genreSelected ? '#8697a5' : '#fff',
            };

            return (
              <Text
                key={id}
                onPress={() => onChangeGenre(id)}
                style={[styles.genre, styleColor]}>
                {name}
              </Text>
            );
          })}
        </ScrollView>

        <Carousel
          firstItem={1}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          layout="default"
          sliderWidth={width}
          itemWidth={ITEM_WIDTH_CAROUSEL_GENRE_MOVIES}
          data={moviesForGenre}
          renderItem={({item}) => (
            <CardMovie {...item} navigation={navigation} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newsMovies: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  viewGenres: {
    marginTop: 20,
    marginBottom: 50,
  },
  genres: {
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 20,
    padding: 10,
  },
  genresTitle: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  genre: {
    marginRight: 20,
    fontSize: 16,
  },
});

import {ScrollView, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title, Text} from 'react-native-paper';
import map from 'lodash/map';
import {getNewsMovies} from 'services/movies/get-news-movies';
import CarouselVertical from 'components/CarouselVertical';
import MovieVerticalItem from 'components/movies/MovieVerticalItem';
import {getMoviesWithGenres} from 'utils/get-movies-with-genres';
import {getGenres} from 'services/movies/get-genres';

export default function Home({navigation}) {
  const [newsMovies, setNewsMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(null);

  const onChangeGenre = id => setGenreSelected(id);

  useEffect(() => {
    (async () => await moreNewsMovies(1))();
  }, []);

  useEffect(() => {
    getGenres()
      .then(data => {
        setGenres(data);
        onChangeGenre(data[0].id);
      })
      .catch(() => setGenres([]));
  }, []);

  const moreNewsMovies = async page => {
    try {
      const {results} = await getNewsMovies(page);
      const movies = await getMoviesWithGenres(results);
      setNewsMovies(currentNewsMovies => [...currentNewsMovies, ...movies]);
    } catch (error) {
      setNewsMovies(currentNewsMovies => currentNewsMovies);
    }
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {newsMovies && (
        <View style={styles.newsMovies}>
          <Title style={styles.title}>Nuevas Películas</Title>
          <CarouselVertical
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

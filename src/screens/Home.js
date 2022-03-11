import {ScrollView, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title} from 'react-native-paper';
import {getNewsMovies} from 'services/movies/get-news-movies';
import CarouselVertical from 'components/CarouselVertical';
import MovieVerticalItem from 'components/movies/MovieVerticalItem';
import {getMoviesWithGenres} from 'utils/get-movies-with-genres';

export default function Home({navigation}) {
  const [newsMovies, setNewsMovies] = useState([]);

  useEffect(() => {
    (async () => await moreNewsMovies(1))();
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
});

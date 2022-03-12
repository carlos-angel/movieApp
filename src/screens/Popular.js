import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Title, Button} from 'react-native-paper';
import map from 'lodash/map';
import {getPopularMovies} from 'services/movies/get-popular-movies';
import Loading from 'components/common/Loading';
import endpoints from 'services/api';
import defaultImage from 'assets/png/default-image.png';
import {Rating} from 'react-native-ratings';
import {useTheme} from 'hooks/useTheme';
import starDark from 'assets/png/starDark.png';
import starLight from 'assets/png/starLight.png';

export default function Popular({navigation}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const [loading, setLoading] = useState(false);
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const isMorePages = page !== totalPages;

  useEffect(() => {
    (async () => await moreMovies(page))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const moreMovies = async currentPage => {
    setLoading(true);
    getPopularMovies(currentPage)
      .then(({results, total_pages}) => {
        setMovies(currentMovies => [...currentMovies, ...results]);
        if (total_pages !== totalPages) {
          setTotalPages(total_pages);
        }
      })
      .catch(() => setMovies(currentNewsMovies => currentNewsMovies))
      .finally(() => setLoading(false));
  };

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
                  <Rating
                    type="custom"
                    ratingImage={isDark ? starDark : starLight}
                    ratingColor="#ffc205"
                    ratingBackgroundColor={isDark ? '#192734' : '#f0f0f0'}
                    startingValue={media}
                    imageSize={20}
                    style={styles.rating}
                  />

                  <Text style={styles.votes}>{`${vote_count} votos`}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
      {isMorePages && (
        <Button
          disabled={loading}
          loading={loading}
          onPress={() => setPage(currentPage => currentPage + 1)}
          mode="contained"
          contentStyle={styles.buttonMoreMovies}
          style={styles.loadMoreMovies}
          labelStyle={
            isDark ? styles.labelButtonDark : styles.labelButtonLight
          }>
          cargar más películas
        </Button>
      )}
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
  rating: {
    marginRight: 15,
  },
  votes: {
    fontSize: 12,
    color: '#8697a5',
    marginTop: 5,
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

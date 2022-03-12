import React, {useState, useEffect} from 'react';
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
import defaultImage from 'assets/png/default-image.png';
import {Rating} from 'react-native-ratings';
import {useTheme} from 'hooks/useTheme';
import starDark from 'assets/png/starDark.png';
import starLight from 'assets/png/starLight.png';

export default function Popular({navigation}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const {theme} = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    (async () => await moreMovies())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moreMovies = async () => {
    setLoading(true);
    getPopularMovies(page)
      .then(({results}) => {
        setMovies(currentMovies => [...currentMovies, ...results]);
        setPage(currentPage => currentPage + 1);
      })
      .catch(() => setMovies(currentNewsMovies => currentNewsMovies))
      .finally(() => setLoading(false));
  };

  if (loading) {
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
            onPress={() => navigation.navigate('movie', {id})}>
            <View key={id} style={styles.movie}>
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
});

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import {getSearchMovies} from 'services/movies/get-search-movies';
import size from 'lodash/size';
import {ScrollView} from 'react-native-gesture-handler';
import map from 'lodash/map';
import endpoints from 'services/api';
import Loading from 'components/common/Loading';
import defaultImage from 'assets/png/default-image.png';

const {width} = Dimensions.get('window');

export default function Search({navigation}) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const showResults = !loading && size(query) > 2;

  useEffect(() => {
    if (size(query) > 2) {
      setLoading(true);
      getSearchMovies(query)
        .then(({results}) => setMovies(results))
        .catch(() => setMovies(null))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Busca tu película"
        iconColor="transparent"
        style={styles.input}
        onChangeText={e => setQuery(e)}
        value={query}
      />
      <ScrollView>
        <View style={styles.container}>
          {loading && <Loading message="buscando..." />}
          {showResults &&
            map(movies, movie => {
              const {id, poster_path, title} = movie;
              const poster_uri = endpoints.image.w500(poster_path);
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('movie', {id})}>
                  <View style={styles.movie}>
                    {poster_path ? (
                      <Image
                        style={styles.image}
                        source={poster_path ? {uri: poster_uri} : defaultImage}
                      />
                    ) : (
                      <Text>{title}</Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 3,
    backgroundColor: '#15212b',
    zIndex: 10,
  },
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
  image: {
    width: '100%',
    height: '100%',
  },
});

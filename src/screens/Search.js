import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {getSearchMovies} from 'services/movies';
import size from 'lodash/size';
import {ScrollView} from 'react-native-gesture-handler';
import map from 'lodash/map';
import Loading from 'components/common/Loading';
import Poster from 'components/movies/Poster';

const {width} = Dimensions.get('window');
const widthPoster = width / 2;

export default function Search({navigation}) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const showResults = !loading && size(query) > 2;

  useEffect(() => {
    if (size(query) > 2) {
      setLoading(true);
      getSearchMovies({query})
        .then(({data}) => setMovies(data.results))
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
            map(movies, ({id, title, poster_path}) => (
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
});

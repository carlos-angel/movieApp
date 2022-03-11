/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getDetailMovie} from 'services/movies/get-detail-movie';

export default function Movie({route, navigation}) {
  const [movie, setMovie] = useState(null);
  const {id, title} = route.params;

  useEffect(() => {
    const titleMovie = title.length > 24 ? `${title.slice(0, 24)}...` : title;
    navigation.setOptions({title: titleMovie});
  }, [title]);

  useEffect(() => {
    getDetailMovie(id)
      .then(data => setMovie(data))
      .catch(() => navigation.goBack());
  }, [id]);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Movie</Text>
    </SafeAreaView>
  );
}

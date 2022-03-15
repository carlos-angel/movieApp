/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Text, Title} from 'react-native-paper';
import {getDetailMovie} from 'services/movies/get-detail-movie';
import endpoints from 'services/api';
import Loading from 'components/common/Loading';
import ModalVideo from 'components/common/ModalVideo';
import Rating from 'components/common/Rating';
import Genres from 'components/movies/Genres';
import Details from 'components/movies/Details';

export default function Movie({route, navigation}) {
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const {id} = route.params;

  useEffect(() => {
    getDetailMovie(id)
      .then(data => setMovie(data))
      .catch(() => navigation.goBack());
  }, [id]);

  if (!movie) {
    return <Loading message="cargando película" />;
  }

  const {
    poster_path,
    title,
    genres,
    vote_average,
    vote_count,
    overview,
    release_date,
  } = movie;

  const poster_uri = endpoints.image.w500(poster_path);
  const media = vote_average / 2;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Details>
          <Details.Poster uri={poster_uri} />
          <Details.Play onPress={() => setShowVideo(true)} />

          <Details.Head>
            <Title>{title}</Title>
            <Genres data={genres} size="medium" />
          </Details.Head>

          <Details.MoreInfo>
            <Rating startingValue={media} imageSize={20} />
            <Text style={styles.votes}>{`${vote_count} votos`}</Text>
          </Details.MoreInfo>

          <Details.Overview text={overview} />
          <Details.ReleaseDate
            releaseDate={`Fecha de lanzamiento: ${release_date}`}
          />
        </Details>
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
}

const styles = StyleSheet.create({
  votes: {
    fontSize: 12,
  },
});

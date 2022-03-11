import {
  TMDB_API_KEY,
  TMDB_BASE_URL,
  TMDB_VERSION,
  TMDB_LENGUAJE,
  TMDB_PATH_IMAGE,
} from 'constants/api';

export default {
  movies: {
    getNowPlaying: ({page}) =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/movie/now_playing?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}&page=${page}`,
    getDetailMovieById: id =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/movie/${id}?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}`,
  },
  image: {
    w500: name => `${TMDB_PATH_IMAGE}/w500${name}`,
  },
  genres: `${TMDB_BASE_URL}/${TMDB_VERSION}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}`,
};

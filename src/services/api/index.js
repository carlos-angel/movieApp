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
    getGenreMovies: genreId =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/discover/movie/?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}&with_genres=${genreId}`,
    getVideoMovieById: id =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}`,
    getPopularMovies: ({page}) =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/movie/popular?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}&page=${page}`,
    getSearchMovies: ({query}) =>
      `${TMDB_BASE_URL}/${TMDB_VERSION}/search/movie?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}&query=${query}`,
  },
  image: {
    w500: name => `${TMDB_PATH_IMAGE}/w500${name}`,
  },
  genres: `${TMDB_BASE_URL}/${TMDB_VERSION}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${TMDB_LENGUAJE}`,
};

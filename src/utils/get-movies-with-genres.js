import {map} from 'lodash';
import {getGenres} from 'services/movies/get-genres';

export async function getMoviesWithGenres(movies) {
  const genres = await getGenres();

  return map(movies, movie => {
    const {genre_ids} = movie;
    const genresMovie = map(genre_ids, id => {
      const genreMovie = genres.find(genre => genre.id === id);
      return genreMovie.name;
    });
    return {...movie, genres: genresMovie};
  });
}

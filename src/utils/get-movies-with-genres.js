import {map} from 'lodash';
import {getGenres} from 'services/movies';

export async function getMoviesWithGenres(movies) {
  const {data: genres} = await getGenres();

  return map(movies, movie => {
    const {genre_ids} = movie;
    const genresMovie = map(genre_ids, id => {
      const genreMovie = genres.find(genre => genre.id === id);
      return genreMovie;
    });
    return {...movie, genres: genresMovie};
  });
}

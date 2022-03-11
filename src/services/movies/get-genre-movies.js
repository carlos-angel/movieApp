import endpoints from 'services/api';

export async function getGenreMovies(genreId) {
  const endpoint = endpoints.movies.getGenreMovies(genreId);
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. inténtelo más tarde'));
}

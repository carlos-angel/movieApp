import endpoints from 'services/api';

export async function getDetailMovie(id) {
  const endpoint = endpoints.movies.getDetailMovieById(id);
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. inténtelo más tarde'));
}

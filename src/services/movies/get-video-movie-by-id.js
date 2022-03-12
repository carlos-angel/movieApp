import endpoints from 'services/api';

export function getVideoMovieById(id) {
  const endpoint = endpoints.movies.getVideoMovieById(id);

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. intentelo más tarde'));
}

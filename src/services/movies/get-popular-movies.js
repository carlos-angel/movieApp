import endpoints from 'services/api';

export function getPopularMovies(page = 1) {
  const endpoint = endpoints.movies.getPopularMovies({page});

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. intentelo más tarde'));
}

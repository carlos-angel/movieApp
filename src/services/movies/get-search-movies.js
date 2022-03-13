import endpoints from 'services/api';

export function getSearchMovies(query) {
  const endpoint = endpoints.movies.getSearchMovies({query});

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. inténtelo más tarde'));
}

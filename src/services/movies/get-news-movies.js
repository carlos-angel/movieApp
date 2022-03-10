import endpoints from 'services/api';

export function getNewsMovies(page = 1) {
  const endpoint = endpoints.movies.getNowPlaying({page});

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data)
    .catch(() => console.log('ops, algo salio mal. intentelo más tarde'));
}

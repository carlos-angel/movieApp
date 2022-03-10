import endpoints from 'services/api';

export function getGenres() {
  const endpoint = endpoints.genres;

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data.genres)
    .catch(() => console.log('ops, algo salio mal. inténtelo más tarde'));
}

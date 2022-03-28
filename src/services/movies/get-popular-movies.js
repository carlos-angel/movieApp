import axios from 'axios';
import endpoints from 'services/api';
import {getMessageError} from 'utils/getMessageError.util';

export async function getPopularMovies({page = 1}) {
  try {
    const {data} = await axios.get(endpoints.movies.getPopularMovies({page}));
    return {error: false, message: '', data};
  } catch (error) {
    const message = getMessageError(error);
    return {error: true, message, data: null};
  }
}

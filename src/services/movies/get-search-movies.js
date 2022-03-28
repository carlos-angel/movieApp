import axios from 'axios';
import endpoints from 'services/api';
import {getMessageError} from 'utils/getMessageError.util';

export async function getSearchMovies({query}) {
  try {
    const {data} = await axios.get(endpoints.movies.getSearchMovies({query}));
    return {error: false, message: '', data};
  } catch (error) {
    const message = getMessageError(error);
    return {error: true, message, data: null};
  }
}

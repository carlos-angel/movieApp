import axios from 'axios';
import endpoints from 'services/api';
import {getMessageError} from 'utils/getMessageError.util';

export async function getDetailMovie({id}) {
  try {
    const {data} = await axios.get(endpoints.movies.getDetailMovieById(id));
    return {error: false, message: '', data};
  } catch (error) {
    const message = getMessageError(error);
    return {error: true, message, data: null};
  }
}

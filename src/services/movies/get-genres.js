import axios from 'axios';
import endpoints from 'services/api';
import {getMessageError} from 'utils/getMessageError.util';

export async function getGenres() {
  try {
    const {data} = await axios.get(endpoints.genres);
    return {error: false, message: '', data: data.genres};
  } catch (error) {
    const message = getMessageError(error);
    return {error: true, message, data: null};
  }
}

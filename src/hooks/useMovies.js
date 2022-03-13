import {useState, useEffect} from 'react';
import {getMoviesWithGenres} from 'utils/get-movies-with-genres';

export const useMovies = service => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);

  const isLastPage = page >= setTotalPages;

  useEffect(() => {
    setLoading(true);
    service(page)
      .then(({results, total_pages}) => {
        total_pages !== totalPages && setTotalPages(total_pages);
        return getMoviesWithGenres(results);
      })
      .then(data => setMovies(currentMovies => [...currentMovies, ...data]))
      .catch(() => setMovies(currentMovies => currentMovies))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const moreMovies = () =>
    !isLastPage && setPage(currentPage => currentPage + 1);

  return [movies, loading, page, moreMovies, isLastPage];
};

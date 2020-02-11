import { useState, useEffect } from 'react';
import axios from '../api/dbInstance';

const useRequest = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('movies?_sort=createdAt&_order=desc')
      .then(({ data }) => {
        setMovies(data);
      })
      .catch(console.log);
  }, []);

  const addMovieToDb = movie => {
    const { id, title, year, length, rating, poster, plot } = movie;
    axios
      .post('movies', {
        id,
        title,
        year,
        length,
        rating,
        poster,
        plot,
        createdAt: new Date(),
      })
      .then(({ data }) => {
        setMovies([data, ...movies]);
      })
      .catch(console.log);
  };

  return { movies, addMovieToDb };
};

export default useRequest;

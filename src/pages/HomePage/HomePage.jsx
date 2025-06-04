import { useEffect, useState } from 'react';
import { fetchMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function FetchMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log('error');
      }
    }
    FetchMovies();
  }, []);
  return (
    <div>
      <h1 className={css.heading}>Trending Movies Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
// poster_path

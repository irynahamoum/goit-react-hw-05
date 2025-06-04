import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByID, IMAGE_URL } from '../../movies-api';
import css from './MovieDetailsPage.module.css';
const MovieDetailsPage = () => {
  const { movieId } = useParams(); // <-- FIXED
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMoviesByID(movieId); // movieId is now a string
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className={css.detailsPage}>
      <div className={css.container}>
        <div className={css.card}>
          <img className={css.image} src={movie.poster_path ? IMAGE_URL + movie.poster_path : ''} alt={movie.title} />
        </div>
        <div className={css.details}>
          <h2>{movie.original_title.toUpperCase()}</h2>
          <p>
            User score: <b>{movie.vote_average.toFixed(1)}</b>
          </p>
          <h3>Overview:</h3>
          <p className={css.desctiption}>{movie.overview}</p>
          <h3>Genres:</h3>
          <p>
            {movie.genres && movie.genres.length > 0 ? movie.genres.map((genre) => genre.name).join(', ') : 'No genres'}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h4>Additional information:</h4>
        <ul className={css.infoList}>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

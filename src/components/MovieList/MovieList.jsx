import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../movies-api';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id} className={css.card}>
                <Link to={`/movies/${movie.id}`}>
                  <img className={css.image} src={movie.poster_path && IMAGE_URL + `${movie.poster_path}`} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;

import { Link } from 'react-router-dom';
import css from './MoviesList.module.css'
import PropTypes from 'prop-types';

export function MoviesList({ data, title, location }) {
  return (
    <section className={css.sectionMain}>
      {title && <h2 className={css.titleList}>{title}</h2>}
      <ul className={css.titleList}>
        {data.map(movie => (
          <li key={movie.id} className={css.moviesItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className={css.posterImage}
                />
              ) : (
                movie.name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};
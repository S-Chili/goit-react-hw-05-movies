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
              {movie.name ?? movie.title}
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
  location: PropTypes.object,
};
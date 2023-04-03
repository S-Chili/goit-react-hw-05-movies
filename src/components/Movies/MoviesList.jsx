import { Link } from 'react-router-dom';
import css from './MoviesList.module.css'


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
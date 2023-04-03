import { Link, useLocation, Outlet } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import css from './Details.module.css'



export function Details({ data }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;
  const rating = Math.round(vote_average * 10) + '%';
  //const genresList = genres.map(genre => genre.name).join(' ');
  //const year = release_date.split('-')[0];
  const location = useLocation();
  const from = location.state.from;
  let genresList = '';
  if (genres) {
    const genresArray = Array.isArray(genres) ? genres : Object.values(genres);
    genresList = genresArray.map(genre => genre.name).join(' ');
  }
  const year = release_date ? release_date.split('-')[0] : '';

  return (
    <>
      <section className={css.detailsSect}>
        <Link to={location?.state?.from ?? '/'} className={css.button}>
          <BsArrowLeft />
          <span className={css.linkContent}>Go back</span>
        </Link>
        <div className={css.moviesInfo}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
            className={css.moviePoster}
          />
          <div>
              <h2>{`${title}${year && ` (${year})`}`}</h2>
              <p className={css.userScore}>User score: {rating}</p>
              <h3>Overview</h3>
              <p className={css.detailsDescr}>{overview}</p>
              <h3>Genres</h3>
              <p>{genresList}</p>
          </div>
        </div>
      </section>
      <section className={css.subSect}>
        <p className={css.subTitle}>Additional information</p>
        <ul className={css.layoutList}>
          <li className={css.layoutItem}>
            <Link to="cast" state={{ from }} className={css.button}>
            <span className={css.linkContent}>Cast</span>
            </Link>
          </li>
          <li className={css.layoutItem}>
            <Link to="reviews" state={{ from }} className={css.button}>
            <span className={css.linkContent}>Reviews</span>
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}
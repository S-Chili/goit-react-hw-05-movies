import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'API/GetMovies';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css'

function Cast() {
  const { movieId } = useParams()
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieCredits(movieId);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [movieId])

  return (
    <div className={css.loaderContainer}>
      <ul className={css.castList}>
        {data ? (
          Object.values(data).map(({ profile_path, name, character, id }) => (
            <li key={id} className={css.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                alt={name}
                className={css.cast_image}
              />
              <p className={css.castName}>{name}</p>
              <p>Character: <br /> {character}</p>
            </li>
          ))
        ) : null}
      </ul>

      {isLoading && (
        <div style={{ position: 'absolute', bottom: '-30px', left: '50%' }}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Cast;
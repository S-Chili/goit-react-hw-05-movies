import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesReviews } from 'API/GetMovies';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css'

function Reviews() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMoviesReviews(movieId);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [movieId]);

    return (
        <div className={css.loaderContainer}>
            <ul className={css.viewList}>
                {data ? (
                    Object.values(data).map(({ author, content, id }) => (
                    <li key={id} className={css.viewItem}>
                        <h2>{author}</h2>
                        <p>{content}</p>
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

export default Reviews
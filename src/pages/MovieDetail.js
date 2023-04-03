import {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { getMovieDetails } from '../API/GetMovies';
import { Details } from '../components/Details/Details';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie({ ...data });
      } catch (error) {
        console.log('Error data:', error);
      }
    }
    fetchData();
  }, [movieId]);

  if (!movie) {
    return <></>;
  }

  return (
    <>
      <Details data={movie} />
    </>
  );
}

export default MovieDetail;
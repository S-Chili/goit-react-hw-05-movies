import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API/GetMovies';
import { MoviesList } from 'components/Movies/MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const data = await getTrendingMovies();
            setMovies([...data]);
          } catch (error) {
            console.log('Error fetching:', error);
          }
        }
        fetchData();
    }, []);
    
    return (
      <>
        <MoviesList data={movies} title={'Trending today'} />
      </>
    );
}
    


export default Home;
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { MoviesList } from 'components/Movies/MoviesList';
import { getQueryMovies } from '../API/GetMovies';

function Movies() {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const queryString = searchParams.get('query');

    useEffect(() => {
        async function fetchData() {
            try {
                let data;
                if (!searchValue && queryString) {
                    data = await getQueryMovies(queryString);
                } else {
                    data = await getQueryMovies(searchValue);
                }
                setMovies([...data]);
            } catch (error) {
                console.log('Error data:', error);
            }
        }
        fetchData();
    }, [queryString, searchValue]);

    function searchHandle(data) {
        setSearchValue(data);
    }

    return (
        <>
            <SearchBar query={searchHandle} />
            {movies.length ? <MoviesList data={movies} location={location} /> : null}
        </>
    );
}

export default Movies;
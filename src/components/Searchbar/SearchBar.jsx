import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css'
import PropTypes from 'prop-types';

export function SearchBar({ query }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleNameChange = e => {
        setSearchParams({ query: e.currentTarget.value.toLowerCase() });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (searchParams.get('query').trim() === '') {
            return alert('Введіть назву фільму для пошуку!');
        }

        query(searchParams.get('query'));
        setSearchParams({ query: '' });
    };
    
    return (
        <form onSubmit={handleSubmit} className={css.searchForm}>
            <button type="submit" className={css.button}>
                <span>Search</span>
            </button>
            <input
                type="text"
                name='searchParams'
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={searchParams.get('query') ? searchParams.get('query') : ""}
                onChange={handleNameChange}
                className={css.searchInput}
            />
        </form>
    )
}

export default SearchBar;

SearchBar.propTypes = {
    query: PropTypes.func.isRequired
  };
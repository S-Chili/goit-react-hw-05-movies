import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function SearchBar({ query }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
  const [searchDone, setSearchDone] = useState(false); 

  useEffect(() => {
    setSearchQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleNameChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery === '') {
      return alert('Введіть назву фільму для пошуку!');
    }

    query(trimmedQuery);
    setSearchParams({ query: trimmedQuery });
    setSearchDone(true); 
  };

  const handleInputClick = () => {
    if (searchDone) {
      setSearchQuery(''); 
      setSearchDone(false); 
    }
  };

  return (
    <form onSubmit={handleSearch} className={css.searchForm}>
      <button type="submit" className={css.button}>
        <span>Search</span>
      </button>
      <input
        type="text"
        name="searchParams"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onClick={handleInputClick} 
        onChange={handleNameChange}
        className={css.searchInput}
      />
    </form>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.func.isRequired,
};
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '765ba18e0dea441e3b70cde6d2dcbfe5';

const END_POINTS = {
  trendingMovies: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getTrendingMovies = async () => {
  const result = await fetch(
    `${BASE_URL}${END_POINTS.trendingMovies}?api_key=${API_KEY}`
  );
  const data = await result.json();
  return data.results;
};

export const fetchQueryMovies = async query => {
  const result = await fetch(
    `${BASE_URL}${END_POINTS.querySearch}?api_key=${API_KEY}&query=${query}`
  );
  const data = await result.json();
  return data.results;
};

export const getMovieDetails = async id => {
  const result = await fetch(
    `${BASE_URL}${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await result.json();
  return data;
};

export const getMovieCredits = async id => {
  const result = await fetch(
    `${BASE_URL}/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}`
  );
  const data = await result.json();
  return data.cast;
};

export const getMoviesReviews = async id => {
  const result = await fetch(
    `${BASE_URL}/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}`
  );
  const data = await result.json();
  return data.results;
};
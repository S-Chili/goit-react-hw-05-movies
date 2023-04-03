import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetail from "pages/MovieDetail";
import Reviews from './Reviews/Reviews'
import Cast from "./Cast/Cast";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetail />}>
              <Route path="cast" element={<Cast />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
  );
};

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetail = lazy(() => import("pages/MovieDetail"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));
const Layout = lazy(() => import("./Layout/Layout"));


export const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>    
  );
};

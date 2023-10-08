import Layout from '../Layout/Layout'
import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'))
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
   <Suspense fallback = {<p>Loading...</p>}>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="movies" element={<MoviesPage/>}/>
      <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
    </Route>
    </Routes>
   </Suspense>
  );
};


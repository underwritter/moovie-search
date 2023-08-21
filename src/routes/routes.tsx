import React from "react";
import {
  BrowserRouter as Router,
  Routes as RoutesProvider,
  Route,
} from "react-router-dom";
import {HomePage} from "../components/pages/home-page";
import {FavoriteMoviePage} from "../components/pages/favorite-movie-page";

export const Routes = () => {
  return (
    <Router>
      <RoutesProvider>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite_movie" element={<FavoriteMoviePage />} />
      </RoutesProvider>
    </Router>
  );
};

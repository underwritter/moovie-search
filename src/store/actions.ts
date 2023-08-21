import { ADD_FAVORITE_MOVIES, DELITE_FAVORITE_MOVIES } from "./store";
import { MovieItem } from './../api/movie.types';

export const addFavoriteMovieActionCreator = (MovieItem: MovieItem) => {
    return {
      type: ADD_FAVORITE_MOVIES,
      payload: MovieItem
    };
  };
  export const deliteFavoriteMovieActionCreator = (id: number) => {
    return {
      type: DELITE_FAVORITE_MOVIES,
      payload: id
    };
  };
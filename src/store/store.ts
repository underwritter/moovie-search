import {combineReducers, legacy_createStore as createStore} from "redux";
import {MovieItemType} from "../api/movie.types";
import {actionTypes} from "./store.types";

export const initialFavoriteMovies: MovieItemType = [];

export const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES";
export const DELITE_FAVORITE_MOVIES = "DELITE_FAVORITE_MOVIES";

const JSONStore = JSON.parse(localStorage["redux-store"]);

const favoriteMoviesReducer = (
  state = initialFavoriteMovies,
  action: actionTypes
) => {
  switch (action.type) {
    case ADD_FAVORITE_MOVIES:
      return [...state, action.payload];

    case DELITE_FAVORITE_MOVIES:
      return state.filter(
        (favoriteMovies: {id: number}) => favoriteMovies.id !== action.payload
      );
    default:
      return state;
  }
};

const counterReducer = (state = 0, action: actionTypes) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const reducers = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(
  reducers,
  Object.keys(JSONStore).length ? JSONStore : initialFavoriteMovies
);

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

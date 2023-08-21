import {BaseSyntheticEvent} from "react";
import {MovieItem as MovieElement} from "../../../api/movie.types";

export interface MovieItemTypes {
  movieItem: MovieElement;
  onClick?: (e: BaseSyntheticEvent) => void;
  onDelete?: (arg: number) => void;
  isFavoriteFilms?: boolean;
}

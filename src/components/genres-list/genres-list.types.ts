import {BaseSyntheticEvent} from "react";
import {Genre} from "../../api/movie.types";

export interface GenresListProps {
  allGenres: Genre[];
  onClick?: (e: BaseSyntheticEvent) => void;
  onGenreClick: (arg: string) => void;
}

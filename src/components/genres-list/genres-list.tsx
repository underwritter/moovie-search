import React, {FC} from "react";
import {Genre} from "../../api/movie.types";
import {GenresListProps} from "./genres-list.types";
import "./style.sass";

export const GenresList: FC<GenresListProps> = ({allGenres, onGenreClick}) => {
  return (
    <div className="genersList">
      {allGenres?.map((item: Genre, index: number) => (
        <div
          onClick={() => onGenreClick(item.name)}
          key={index}
          className="genersItem"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

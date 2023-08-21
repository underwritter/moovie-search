import React, {FC} from "react";
import {MovieItemTypes} from "./movie-item.types";
import "./style.sass";

export const MovieItem: FC<MovieItemTypes> = ({
  movieItem,
  onClick,
  onDelete,
  isFavoriteFilms,
}) => {
  const {poster, name, year, id} = movieItem;

  return (
    <div onClick={onClick} className="movieItem">
      <div className="wrapperPoster">
        <div
          className="poster"
          style={{
            backgroundImage: `url(${poster?.previewUrl})`,
            backgroundSize: "cover",
          }}
        >
          {isFavoriteFilms ? (
            <div
              className="deliteBtn"
              onClick={() => {
                onDelete?.(id);
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        <div className="name">{name}</div>
        <div className="year">Год выхода: {year}</div>
      </div>
    </div>
  );
};

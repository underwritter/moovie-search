import React, {FC} from "react";
import {ModalWindow} from "../modal-window/modal-window";
import {MovieItem} from "../../api/movie.types";
import "./style.sass";
import {addFavoriteMovieActionCreator} from "../../store/actions";
import {useDispatch} from "react-redux";

interface MovieDecriptionProps {
  isOpened: boolean;
  onCloseModal: VoidFunction;
  movieItemInfo: MovieItem;
}

export const MovieDecription: FC<MovieDecriptionProps> = ({
  isOpened,
  onCloseModal,
  movieItemInfo,
}) => {
  const {
    name,
    poster,
    countries,
    year,
    genres,
    movieLength,
    description,
    watchability,
  } = movieItemInfo;

  const onOpenOutsideSite = (url: string) => {
    window.open(url, "_blank");
  };
  const dispatch = useDispatch();
  const handleAddFavoriteMovie = () => {
    dispatch(addFavoriteMovieActionCreator(movieItemInfo));
  };

  return (
    <ModalWindow active={isOpened && !!name} onClose={onCloseModal}>
      <div className="movieDecription">
        <div className="btn_favorite" onClick={handleAddFavoriteMovie}>
          Добавить в избранное
        </div>

        <div>
          <div
            className="movieImage"
            style={{
              backgroundImage: `url(${poster?.previewUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
          Смотреть на:
          <div className="wrapperWatchability">
            {watchability?.items?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="logoWatchability"
                  style={{
                    backgroundImage: `url(${item.logo.url})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => onOpenOutsideSite(item.url)}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="allDescription">
          <div className="movieName">{name}</div>
          <div>
            Страна:
            {countries?.map((item, index) => {
              return <span key={index}> {item.name} </span>;
            })}
          </div>

          <div>Год выхода: {year}</div>
          <div>
            Жанры:
            {genres?.map((item, index) => {
              return <span key={index}> {item.name} </span>;
            })}
          </div>

          <div>Длительность: {movieLength}мин.</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </ModalWindow>
  );
};

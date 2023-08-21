import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {MovieItem, MovieItemType} from "../../api/movie.types";
import {MovieItem as MovieItemComponents} from "../movie/movie-item/movie-item";
import {deliteFavoriteMovieActionCreator} from "../../store/actions";
import "./style.sass";
import {Header} from "../header/header";

export const FavoriteMoviePage = () => {
  const favoriteMovies: MovieItemType = useSelector(
    (state: RootState) => state.favoriteMovies
  );

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deliteFavoriteMovieActionCreator(id));
  };
  console.log(favoriteMovies);

  return (
    <div className="FMPage">
      <Header onClick={() => console.log()} />

      <div className="FMW">
        {!favoriteMovies?.length ? (
          <div style={{fontSize: "25px", color: "white"}}>
            Добавьте любой фильм в любимое и он будет здесь
          </div>
        ) : (
          favoriteMovies.map((item: MovieItem) => {
            const {id} = item;
            return (
              <div key={id}>
                <MovieItemComponents
                  movieItem={item}
                  onDelete={handleDelete}
                  isFavoriteFilms={true}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
